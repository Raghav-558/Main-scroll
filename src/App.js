import './App.css';
import Become from './components/Become';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Growth from './components/Growth';
import HeroSection from './components/HeroSection';
import Platform from './components/Platform';
import Revenue from './components/Revenue';

function App() {
  return (
    <div>
      <HeroSection />
      <Platform />
      <Revenue />
      <Growth />
      <Faqs />
      <Become />
      <Footer/>
    </div>
  );
}

export default App;
