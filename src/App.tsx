
import Router from './shared/components/Route';
import { Layout } from './shared/Layout';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header';
import { PreFooter } from './shared/components/PreFoot';
import './main.global.css';
import { SliderTest } from './shared/components/SliderTest';
import { Slider } from './shared/components/Home/Slider';

function App() {
  return (
    <Layout>
      <Header />
      <Router />
      <PreFooter />
      <div className="border_bottom"></div>
      <Footer />
    </Layout>
  );
}
export default App;
