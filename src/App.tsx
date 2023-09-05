import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";
import Router from "./shared/components/ui/Router";
import "./main.global.css";
import { Home } from "./shared/components/Home";
import { Contact } from "./shared/components/Contact";
import { PreFooter } from "./shared/components/PreFoot";
import { CertificateList } from "./shared/components/CertificateList";

function AppComponent() {
  return (
    <Layout>
      <Header />
      {/* <Router />  использовать после правильного подключения роутинга */}
      {/* <Home /> */}
      {/* <Contact /> */}
      <CertificateList />
      <PreFooter />
      <div className="border_bottom"></div>
      <Footer />
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
