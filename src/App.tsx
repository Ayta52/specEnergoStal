import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Layout } from './shared/Layout';
import './main.global.css';
import { Header } from './shared/components/Header';

function AppComponent() {
  return (
    <Layout>
      <Header />
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
