
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Building2, Layout, Sofa, PenTool, VenetianMask } from 'lucide-react';

const services = [
  {
    title: "Residential Design",
    icon: Home,
    description: "Transform your living spaces into personalized sanctuaries that reflect your unique style and needs.",
  },
  {
    title: "Commercial Spaces",
    icon: Building2,
    description: "Create functional and inspiring workplace environments that boost productivity and impress clients.",
  },
  {
    title: "Space Planning",
    icon: Layout,
    description: "Optimize your floor plans for ideal flow, functionality and maximum utilization of available space.",
  },
  {
    title: "Furniture Selection",
    icon: Sofa,
    description: "Source the perfect furniture pieces to complement your space and reflect your aesthetic vision.",
  },
  {
    title: "3D Visualization",
    icon: VenetianMask,
    description: "Experience your design before implementation with photorealistic 3D renderings of your future space.",
  },
  {
    title: "Custom Solutions",
    icon: PenTool,
    description: "Bespoke design elements created specifically for your unique spaces and requirements.",
  }
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive interior design solutions tailored to your specific needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group border-gray-200 hover:border-yusluv-gold transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mb-5 inline-flex p-3 rounded-md bg-yusluv-cream text-yusluv-charcoal">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-yusluv-charcoal font-medium group-hover:text-yusluv-gold transition-colors"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-yusluv-charcoal hover:bg-yusluv-gold transition-colors">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
