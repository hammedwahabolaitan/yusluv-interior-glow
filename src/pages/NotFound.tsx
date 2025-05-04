
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Set page title
    document.title = 'Page Not Found - Yusluv Interior';
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-yusluv-cream py-32">
        <div className="text-center px-4">
          <h1 className="text-9xl font-serif font-bold text-yusluv-charcoal">404</h1>
          <div className="h-1 w-20 bg-yusluv-gold mx-auto my-6"></div>
          <h2 className="text-3xl font-serif font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-yusluv-charcoal hover:bg-yusluv-gold transition-colors">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline" className="border-yusluv-charcoal text-yusluv-charcoal hover:bg-yusluv-charcoal hover:text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
