import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Layout } from './shared/Layout';
import './main.global.css';
import { Header } from './shared/components/Header';
import { PreHeader } from './shared/components/PreHeader';
import { Ticker } from './shared/components/Ticker';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <PreHeader />
      <Ticker />
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
