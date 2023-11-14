
import Router from './shared/components/Route';
import { Layout } from './shared/Layout';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header';
import { PreFooter } from './shared/components/PreFoot';
import './main.global.css';
import { Ticker } from './shared/components/Home/Ticker';

function App() {
  return (
    <Layout>
      {/* <Header />
      <Router />
      <PreFooter />
      <div className="border_bottom"></div>
      <Footer /> */}
      <Ticker />
    </Layout>
  );
}
export default App;
