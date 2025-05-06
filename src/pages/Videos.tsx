
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoShowcase from '@/components/video/VideoShowcase';

const Videos = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Design Videos - Yusluv Interior';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-yusluv-dark text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif mb-4 text-center">Design Inspiration Videos</h1>
            <p className="max-w-2xl mx-auto text-center text-gray-300">
              Explore curated videos from professional interior designers to get inspiration for your next project.
            </p>
          </div>
        </div>
        <VideoShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
