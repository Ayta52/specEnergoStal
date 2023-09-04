import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Certificate } from './shared/components/ComponentCertificates/Certificate';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header';
import { PreFooter } from './shared/components/PreFoot';
import { PreHeader } from './shared/components/PreHeader';
import { Slider } from './shared/components/Slider';
import { Ticker } from './shared/components/Ticker';
import './main.global.css';
import Router from './shared/components/ui/Router';

function AppComponent() {
  return (
      <Layout>
        <Header />
        <PreHeader />
        <Slider />
        <Ticker />
        <Certificate />
        <PreFooter />
        <div className="border_bottom"></div>
        <Footer />
      </Layout>
  );
}

export const App = hot(() => (
    <AppComponent />
));
