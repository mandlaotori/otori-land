import { Element } from 'react-scroll';
import { Toaster } from '@/components/ui/sonner';
import Hero from '@/components/sections/Hero';
import MarketStats from '@/components/sections/MarketStats';
import HowItWorks from '@/components/sections/HowItWorks';
import About from '@/components/sections/About';
import EarlyAccessForm from '@/components/sections/EarlyAccessForm';
import Footer from '@/components/sections/Footer';
import Navigation from '@/components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-blue-900">
      <Navigation />
      
      <Element name="hero">
        <Hero />
      </Element>

      <Element name="market-stats">
        <MarketStats />
      </Element>

      <Element name="how-it-works">
        <HowItWorks />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="early-access">
        <EarlyAccessForm />
      </Element>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;