
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedProjects from '@/components/FeaturedProjects';
import ServicesPreview from '@/components/ServicesPreview';
import Testimonials from '@/components/Testimonials';
import ConsultationCTA from '@/components/ConsultationCTA';
import GalleryShowcase from '@/components/gallery/GalleryShowcase';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Yusluv Interior - Premium Interior Design Services';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesPreview />
        <FeaturedProjects />
        <GalleryShowcase />
        <Testimonials />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
