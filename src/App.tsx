
import Router from './shared/components/Route';
import { Layout } from './shared/Layout';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header';
import { PreFooter } from './shared/components/PreFoot';
import './main.global.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './shared/components/Home';
import { Contact } from './shared/components/Contact';
import { CertificateList } from './shared/components/CertificateList';
import { ProductList } from './shared/components/ProductList';
import { ProductInfo } from './shared/components/ProductInfo';
import { NotFound } from './shared/components/NotFound';
import { Otvod } from './shared/components/ProductList/Otvod';
import { Perehod } from './shared/components/ProductList/Perehod';
import { Troynik } from './shared/components/ProductList/Troynik';
import { Flanec } from './shared/components/ProductList/Flanec';
import { Dno } from './shared/components/ProductList/Dno';
import { Zaglushka } from './shared/components/ProductList/Zaglushka';
import { Opora } from './shared/components/ProductList/Opora';
import { Shtucer } from './shared/components/ProductList/Shtucer';
import { ZapornayaArmatura } from './shared/components/ProductList/ZapornayaArmatura';

function App() {
  return (
    <Layout>
      <Header />
      {/* <Router /> */}
      {/* <Routes> */}
        {/* <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<CertificateList />} path="/certificatelist" />
        <Route element={<ProductList />} path="/productlist" />
        <Route element={<ProductInfo />} path="/productinfo" />
        <Route element={<NotFound />} path="*" />
        <Route element={<Otvod />} path="/otvod" />
        <Route element={<Perehod />} path="/perehod" />
        <Route element={<Troynik />} path="/troynik" />
        <Route element={<Flanec />} path="/flanec" />
        <Route element={<Dno />} path="/dno" />
        <Route element={<Zaglushka />} path="/zaglushka" />
        <Route element={<Opora />} path="/opora" />
        <Route element={<Shtucer />} path="/shtucer" />
        <Route element={<ZapornayaArmatura />} path="/productinfo" /> */}
      {/* </Routes> */}
      <Contact />
      <PreFooter />
      <div className="border_bottom"></div>
      <Footer />
    </Layout>
  );
}
export default App;
