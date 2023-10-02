import React from 'react';

import { Layout } from './shared/Layout';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header';
import { Home } from './shared/components/Home';
import { Contact } from './shared/components/Contact';
import { PreFooter } from './shared/components/PreFoot';
import { CertificateList } from './shared/components/CertificateList';
import { NotFound } from './shared/components/NotFound';
import { ProductList } from './shared/components/ProductList';
import { ProductInfo } from './shared/components/ProductInfo';
import { Route, Routes } from 'react-router-dom';
import './main.global.css';

function App() {
  return (
    <Layout>
      <Header />
      {/* использовать после правильного подключения роутинга */}
      {/* 
      <Home/>
      <Contact/>
      <CertificateList/>
      <ProductList/>
      <ProductInfo/>
      <NotFound/> */}

      <Routes>
        <Route element={<Home />} path="*" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<CertificateList />} path="/certificatelist" />
        <Route element={<ProductList />} path="/productlist" />
        <Route element={<ProductInfo />} path="/productinfo" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <PreFooter />
      <div className="border_bottom"></div>
      <Footer />
    </Layout>
  );
}
export default App;
