import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Layout } from './shared/Layout';
import './main.global.css';
import { Header } from './shared/components/Header';
import { PreHeader } from './shared/components/PreHeader';
import { Ticker } from './shared/components/Ticker';
import { Slider } from './shared/components/Slider';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <PreHeader />
      <Slider />
      <Ticker />
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
