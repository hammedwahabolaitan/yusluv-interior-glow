
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationCTA from '@/components/ConsultationCTA';
import { Separator } from '@/components/ui/separator';
import { Home, Building2, Layout, Sofa, PenTool, VenetianMask } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: "residential-design",
    title: "Residential Design",
    icon: Home,
    description: "Transform your living spaces into personalized sanctuaries that reflect your unique style and needs. We handle everything from single room makeovers to complete home transformations.",
    features: [
      "Full home redesigns",
      "Room-by-room transformations",
      "Color consultations",
      "Furniture selection and arrangement",
      "Lighting design",
      "Art and accessory curation"
    ],
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "commercial-spaces",
    title: "Commercial Spaces",
    icon: Building2,
    description: "Create functional and inspiring workplace environments that boost productivity and impress clients. Our commercial designs focus on brand identity, functionality, and employee wellbeing.",
    features: [
      "Office spaces",
      "Retail environments",
      "Hospitality design",
      "Healthcare facilities",
      "Brand-aligned interiors",
      "Employee-focused workspaces"
    ],
    image: "https://images.unsplash.com/photo-1604328471151-b52226907017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "space-planning",
    title: "Space Planning",
    icon: Layout,
    description: "Optimize your floor plans for ideal flow, functionality and maximum utilization of available space. Proper space planning is the foundation of great interior design.",
    features: [
      "Spatial analysis",
      "Traffic flow optimization",
      "Functional zoning",
      "Architectural planning",
      "Space utilization studies",
      "Accessibility considerations"
    ],
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1092&q=80"
  },
  {
    id: "furniture-selection",
    title: "Furniture Selection",
    icon: Sofa,
    description: "Source the perfect furniture pieces to complement your space and reflect your aesthetic vision. We handle everything from custom designs to procurement.",
    features: [
      "Custom furniture design",
      "Vendor sourcing",
      "Antique and vintage hunting",
      "Upholstery selection",
      "Procurement and logistics",
      "Furniture placement"
    ],
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  {
    id: "3d-visualization",
    title: "3D Visualization",
    icon: VenetianMask,
    description: "Experience your design before implementation with photorealistic 3D renderings of your future space. Visualize changes before making any physical modifications.",
    features: [
      "Photorealistic renderings",
      "Virtual walkthroughs",
      "Material and finish visualization",
      "Lighting simulations",
      "Before and after comparisons",
      "Design iteration visualization"
    ],
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    icon: PenTool,
    description: "Bespoke design elements created specifically for your unique spaces and requirements. From custom cabinetry to tailored window treatments.",
    features: [
      "Built-in cabinetry",
      "Custom window treatments",
      "Millwork design",
      "Unique lighting fixtures",
      "One-of-a-kind furniture pieces",
      "Specialty finishes"
    ],
    image: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

const Services = () => {
  const location = useLocation();
  const serviceRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Our Services - Yusluv Interior';
    
    // Scroll to the service if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        serviceRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-yusluv-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Our Services</h1>
              <p className="text-lg text-gray-700">
                Comprehensive interior design solutions tailored to your specific needs and aesthetic vision.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                ref={el => serviceRefs.current[service.id] = el}
                className={`py-12 ${index !== 0 ? 'border-t border-gray-200' : ''}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="inline-flex p-3 rounded-md bg-yusluv-cream text-yusluv-charcoal mr-3">
                        <service.icon size={24} />
                      </div>
                      <h2 className="text-3xl font-serif font-semibold">{service.title}</h2>
                    </div>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    
                    <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                    <Separator className="mb-6" />
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-yusluv-gold rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
