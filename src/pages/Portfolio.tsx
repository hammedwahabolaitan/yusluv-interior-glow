
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  year: string;
  location: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    category: "Residential",
    tags: ["Living Room", "Modern", "Minimalist"],
    year: "2022",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    description: "Clean lines, neutral palette, and statement furniture pieces define this contemporary space."
  },
  {
    id: 2,
    title: "Boutique Coffee Shop",
    category: "Commercial",
    tags: ["Cafe", "Industrial", "Rustic"],
    year: "2021",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1178&q=80",
    description: "Rustic meets industrial in this cozy yet spacious coffee shop that prioritizes customer experience."
  },
  {
    id: 3,
    title: "Luxury Master Bedroom Suite",
    category: "Residential",
    tags: ["Bedroom", "Luxury", "Contemporary"],
    year: "2022",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1616137148650-5f6946a1dd6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1202&q=80",
    description: "Opulent textures, custom millwork, and ambient lighting create this sanctuary of relaxation."
  },
  {
    id: 4,
    title: "Urban Loft Kitchen Renovation",
    category: "Residential",
    tags: ["Kitchen", "Industrial", "Modern"],
    year: "2021",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "This former industrial space was transformed into a sleek kitchen with high-end appliances and creative storage solutions."
  },
  {
    id: 5,
    title: "Executive Office Suite",
    category: "Commercial",
    tags: ["Office", "Professional", "Contemporary"],
    year: "2023",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "A sophisticated workspace designed to impress clients while providing functional areas for productivity and collaboration."
  },
  {
    id: 6,
    title: "Scandinavian-Inspired Dining Room",
    category: "Residential",
    tags: ["Dining Room", "Scandinavian", "Minimalist"],
    year: "2022",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    description: "Light woods, clean lines, and strategic pops of color characterize this airy dining space perfect for entertaining."
  }
];

// Gather all unique categories and tags
const allCategories = Array.from(new Set(projects.map(project => project.category)));
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'Portfolio - Yusluv Interior';
    
    // Apply filters
    let filtered = [...projects];
    
    if (selectedCategory) {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    if (selectedTag) {
      filtered = filtered.filter(project => project.tags.includes(selectedTag));
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, selectedTag]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-yusluv-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Our Portfolio</h1>
              <p className="text-lg text-gray-700">
                Explore our collection of thoughtfully designed spaces across various styles and functions.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="mr-4">
                <h3 className="text-sm font-medium">Filter by:</h3>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {allCategories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className={selectedCategory === category ? "bg-yusluv-charcoal" : ""}
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="h-8 w-px bg-gray-300 mx-2"></div>
              
              {/* Tag Filters */}
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm" 
                    className={selectedTag === tag ? "bg-yusluv-charcoal" : ""}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
              
              {/* Clear Filters */}
              {(selectedCategory || selectedTag) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="ml-auto"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Project Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-serif mb-4">No projects match your filters</h3>
                <p className="mb-6 text-gray-600">Try adjusting your filter criteria or clearing all filters.</p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="group">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button asChild className="bg-yusluv-gold hover:bg-yusluv-gold/90 text-yusluv-dark">
                          <Link to={`/portfolio/${project.id}`}>View Project</Link>
                        </Button>
                      </div>
                    </div>
                    <h3 className="text-xl font-serif font-semibold mb-2">{project.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span>{project.category}</span>
                      <span className="mx-2">•</span>
                      <span>{project.location}</span>
                    </div>
                    <p className="text-gray-700">{project.description}</p>
                    <Link 
                      to={`/portfolio/${project.id}`} 
                      className="inline-flex items-center text-yusluv-charcoal font-medium mt-4 group-hover:text-yusluv-gold transition-colors"
                    >
                      View Details
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
