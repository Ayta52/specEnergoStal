const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const mode = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode && 'source-map';

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port,
    open: true,
    hot: true,
    historyApiFallback: true,
    client: {
      overlay: false,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    onBeforeSetupMiddleware(devServer) {
      devMode &&
        require(path.resolve(__dirname, 'src/setupProxy.js'))(devServer.app);
    },
  },
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].[contenthash].bundle.js',
    chunkFilename: 'js/[id].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]',
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerWebpackPlugin()],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName =
              module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/) ??
              'package';
            return `npm.${packageName[1].replace('@', '')}`;
          },
        },
      },
    },
  },
  resolve: {
    extensions: ['.json', '.jsx', '.tsx', '.ts', '.js', '.mjs'],
    alias: {
      '~components': path.resolve(__dirname, 'src/components'),
      '~hooks': path.resolve(__dirname, 'src/hooks'),
      '~types': path.resolve(__dirname, 'src/types'),
      '~pages': path.resolve(__dirname, 'src/pages'),
      '~utils': path.resolve(__dirname, 'src/utils'),
      '~constants': path.resolve(__dirname, 'src/constants'),
      '~helpers': path.resolve(__dirname, 'src/utils/helpers'),
      '~layouts': path.resolve(__dirname, 'src/layouts'),
      '~api': path.resolve(__dirname, 'src/api'),
    },
  },
  plugins: [
    new Dotenv({ path: path.resolve(__dirname, '.env'), systemvars: true }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].bundle.css',
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
      exclude: ['/node_modules/', '/.idea/', '/.vscode/'],
    }),
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
    new webpack.ids.HashedModuleIdsPlugin(),
    new StatoscopeWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              importLoaders: 1,
              modules: {
                mode: 'icss',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
        ],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]',
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10000,
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: require.resolve('@svgr/webpack'),
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              ref: true,
            },
          },
          {
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
        issuer: {
          and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        },
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.m?jsx?$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'pdfs', // Specify the output directory for PDF files
            },
          },
        ],
      },
    ],
  },
};
