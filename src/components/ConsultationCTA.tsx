
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarDays, PhoneCall } from 'lucide-react';

const ConsultationCTA = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yusluv-cream opacity-50 -skew-x-12 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold">
              Ready to transform your space?
            </h2>
            <p className="text-gray-600">
              Book a consultation with our expert designers to start your journey toward a beautifully designed space that reflects your unique style and needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-yusluv-charcoal hover:bg-yusluv-gold transition-colors">
                <Link to="/consultation" className="flex items-center">
                  <CalendarDays size={18} className="mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-yusluv-charcoal text-yusluv-charcoal hover:bg-yusluv-charcoal hover:text-white">
                <Link to="/contact" className="flex items-center">
                  <PhoneCall size={18} className="mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
              alt="Interior design consultation" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-yusluv-gold p-6 rounded shadow-lg max-w-xs">
              <p className="text-lg font-serif font-semibold">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
              <p className="text-sm mt-2 opacity-80">- Steve Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
