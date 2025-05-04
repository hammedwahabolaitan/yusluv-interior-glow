
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
            Creating spaces that inspire
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Elevate your living experience with our premium interior design services. 
            We transform spaces into stunning, functional environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-yusluv-gold hover:bg-opacity-90 text-yusluv-dark">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white hover:bg-white hover:text-yusluv-dark">
              <Link to="/consultation">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <button 
          onClick={scrollToContent}
          className="flex flex-col items-center text-white animate-pulse"
        >
          <span className="text-sm mb-2">Explore</span>
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
