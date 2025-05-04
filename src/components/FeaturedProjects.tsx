
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    description: "Clean lines, neutral palette, and statement furniture pieces define this contemporary space."
  },
  {
    id: 2,
    title: "Boutique Coffee Shop",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1178&q=80",
    description: "Rustic meets industrial in this cozy yet spacious coffee shop that prioritizes customer experience."
  },
  {
    id: 3,
    title: "Luxury Master Bedroom Suite",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1616137148650-5f6946a1dd6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1202&q=80",
    description: "Opulent textures, custom millwork, and ambient lighting create this sanctuary of relaxation."
  },
];

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  return (
    <section className="section-padding bg-yusluv-cream">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of interior transformations that showcase our design philosophy and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 order-last lg:order-first">
            <div className="sticky top-28 space-y-6">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className={`cursor-pointer border-l-4 pl-4 py-2 transition-all duration-300 ${
                    activeProject.id === project.id 
                      ? "border-yusluv-gold" 
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => setActiveProject(project)}
                >
                  <h3 className={`font-serif text-lg ${
                    activeProject.id === project.id 
                      ? "text-yusluv-charcoal font-semibold" 
                      : "text-gray-500"
                  }`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              ))}
              <div className="pt-6">
                <Button asChild variant="outline" className="w-full group">
                  <Link to="/portfolio" className="flex items-center justify-center">
                    View All Projects
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Main Image and Details */}
          <div className="lg:col-span-8 transition-all duration-500 animate-fade-in">
            <div className="rounded-lg overflow-hidden shadow-lg mb-6">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">{activeProject.title}</h3>
              <p className="text-gray-600">{activeProject.description}</p>
              <div className="pt-2">
                <Button asChild variant="default" className="bg-yusluv-charcoal hover:bg-yusluv-gold transition-colors">
                  <Link to={`/portfolio/${activeProject.id}`}>View Project Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
