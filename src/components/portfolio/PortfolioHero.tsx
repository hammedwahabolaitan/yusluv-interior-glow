
import { ArrowDown } from 'lucide-react';

const PortfolioHero = () => {
  const scrollToProjects = () => {
    document.querySelector('.portfolio-projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="bg-yusluv-cream py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 text-yusluv-charcoal">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            Explore our collection of thoughtfully designed spaces across various styles and functions.
            Each project tells a unique story of transformation and creativity.
          </p>
          <button 
            onClick={scrollToProjects}
            className="flex items-center mx-auto text-yusluv-charcoal hover:text-yusluv-gold transition-colors"
          >
            <span className="mr-2 font-medium">Explore Projects</span>
            <ArrowDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default PortfolioHero;
