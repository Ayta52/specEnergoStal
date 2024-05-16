import Router from './shared/components/Route';
import { Layout } from './shared/Layout';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header';
import { PreFooter } from './shared/components/PreFoot';
import './main.global.css';
import { ActiveTabProvider } from './shared/utils/context';

function App() {
  return (
    <Layout>
      <Header />
      
      <ActiveTabProvider>
        <Router />
      </ActiveTabProvider>
      
      <PreFooter />
      <div className="border_bottom"></div>
      <Footer />
    </Layout>
  );
}
export default App;
