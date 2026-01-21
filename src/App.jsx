import './app.css';
import Card from './component/Card';
import Clients from './component/Clients';
import Customers from './component/Customers';
import Footer from './component/Footer';
import From from './component/From';
import Gaminghed from './component/Gaminghed';
import Headphones from './component/Headphones';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Produts';
import CompanyLogo from './component/CompanyLogo';
import TopBar from './component/Topbar';
import Video from './component/Video';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Home />
      <CompanyLogo />
      <Products />
      <Headphones />
      <Gaminghed />
      <Video />
      <Customers />
      <Clients />
      <Footer />
    </div>
  );
}

export default App; 
