import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Home'
import { Contact } from '../Contact'
import { ProductInfo } from '../ProductInfo'
import { ProductList } from '../ProductList'
import { CertificateList } from '../CertificateList'
import { NotFound } from '../NotFound'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<CertificateList />} path="/certificatelist" />
        <Route element={<ProductList />} path="/productlist" />
        <Route element={<ProductInfo />} path="/productinfo" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router
