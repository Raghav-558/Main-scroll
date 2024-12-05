import './App.css';
import Become from './components/Become';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import Growth from './components/Growth';
import Hero from './components/Hero';
import Platform from './components/Platform';
import Revenue from './components/Revenue';

function App() {
  return (
    <div>
      <Hero />
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
