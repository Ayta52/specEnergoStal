import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './shared/Layout';
import './main.global.css';
import { Header } from './shared/components/Header';
import { PreHeader } from './shared/components/PreHeader';
import { Ticker } from './shared/components/Ticker';
import { Slider } from './shared/components/Slider';
import { Certificate } from './shared/components/ComponentCertificates/Certificate';
import { PreFooter } from './shared/components/PreFoot';
import { Footer } from './shared/components/Footer';

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
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
));
