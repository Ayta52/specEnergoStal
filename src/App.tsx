import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import Router from "./shared/components/ui/Router";
import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";
import { Home } from "./shared/components/Home";
import { Contact } from "./shared/components/Contact";
import { PreFooter } from "./shared/components/PreFoot";
import { CertificateList } from "./shared/components/CertificateList";
import { NotFound } from "./shared/components/NotFound";
import { ProductList } from "./shared/components/ProductList";
import { ProductInfo } from "./shared/components/ProductInfo";
import "./main.global.css";

function AppComponent() {
  return (
    <Layout>
      <Header />
      {/* <Router />  использовать после правильного подключения роутинга */}
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <CertificateList /> */}
      {/* <NotFound /> */}
      {/* <ProductList /> */}
      <ProductInfo />
      <PreFooter />
      <div className="border_bottom"></div>
      <Footer />
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
