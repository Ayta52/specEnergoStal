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
      <ActiveTabProvider>
        <Header />
        <Router />
        <PreFooter />
        <div className="border_bottom"></div>
        <Footer />
      </ActiveTabProvider>
    </Layout>
  );
}
export default App;