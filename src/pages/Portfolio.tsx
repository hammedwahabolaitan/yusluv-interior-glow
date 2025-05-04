
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioContainer from '@/components/portfolio/PortfolioContainer';

const Portfolio = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Portfolio - Yusluv Interior';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <PortfolioContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
