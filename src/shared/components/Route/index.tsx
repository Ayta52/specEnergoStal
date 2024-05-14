import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Contact } from "../Contact";
import { CertificateList } from "../CertificateList";
import { ProductList } from "../ProductList";
import { OtvodInfo } from "../ProductList/OtvodInfo";
import { ProductInfo } from "../ProductInfo";
import { NotFound } from "../NotFound";
import { Perehod } from "../ProductList/Perehod";
import { Troynik } from "../ProductList/Troynik";
import { Flanec } from "../ProductList/Flanec";
import { Dno } from "../ProductList/Dno";
import { Zaglushka } from "../ProductList/Zaglushka";
import { Opora } from "../ProductList/Opora";
import { Shtucer } from "../ProductList/Shtucer";
import { ZapornayaArmatura } from "../ProductList/ZapornayaArmatura";
import { ProductListTest } from "../ProductListTest";
import { ProductDescription } from "../ProductListTest/ProductDescription";
import Context from "../../utils/context";

export default function Router() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<CertificateList />} path="/certificatelist" />
        <Route element={<ProductList />} path="/productlist" />


        <Route element={<ProductListTest />} path="/productlisttest" />
        <Route element={<ProductDescription />} path="/productdescription" />

        <Route element={<ProductInfo />} path="/productinfo" />
        <Route element={<NotFound />} path="*" />
        <Route element={<OtvodInfo />} path="/otvodinfo" />
        <Route element={<Perehod />} path="/perehod" />
        <Route element={<Troynik />} path="/troynik" />
        <Route element={<Flanec />} path="/flanec" />
        <Route element={<Dno />} path="/dno" />
        <Route element={<Zaglushka />} path="/zaglushka" />
        <Route element={<Opora />} path="/opora" />
        <Route element={<Shtucer />} path="/shtucer" />
        <Route element={<ZapornayaArmatura />} path="/productinfo" />
      </Routes>
    </>
  );
}
