
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  year: string;
  location: string;
  images: string[];
  description: string;
  challenge: string;
  solution: string;
}

// More detailed project data for individual project pages
const projectsData: Project[] = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    category: "Residential",
    tags: ["Living Room", "Modern", "Minimalist"],
    year: "2022",
    location: "Los Angeles, CA",
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1227&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
    ],
    description: "A complete transformation of a dated living space into a serene, contemporary retreat. Clean lines, neutral palette, and statement furniture pieces define this contemporary space.",
    challenge: "The clients wanted to maximize their compact living area while maintaining an uncluttered, minimalist aesthetic. The original space felt cramped and lacked proper lighting.",
    solution: "We focused on multi-functional furniture pieces and strategic lighting solutions. Custom built-ins provided storage while maintaining clean sightlines, and a neutral palette with strategic pops of color created visual interest without overwhelming the space."
  },
  {
    id: 2,
    title: "Boutique Coffee Shop",
    category: "Commercial",
    tags: ["Cafe", "Industrial", "Rustic"],
    year: "2021",
    location: "Portland, OR",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1178&q=80", 
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80"
    ],
    description: "A welcoming space that balances efficiency for baristas with comfort for patrons. Rustic meets industrial in this cozy yet spacious coffee shop that prioritizes customer experience.",
    challenge: "The client wanted to create a unique identity in a competitive market while maximizing the limited square footage available in their historic building location.",
    solution: "We preserved original architectural elements like exposed brick and wooden beams, complementing them with custom metalwork and sustainable materials. The layout was designed to optimize workflow for staff while creating distinct zones for various customer needs."
  },
  {
    id: 3,
    title: "Luxury Master Bedroom Suite",
    category: "Residential",
    tags: ["Bedroom", "Luxury", "Contemporary"],
    year: "2022",
    location: "Miami, FL",
    images: [
      "https://images.unsplash.com/photo-1616137148650-5f6946a1dd6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1202&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1618221118493-9cfa1a38c92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
    ],
    description: "A retreat for the senses featuring custom millwork, integrated technology, and a spa-inspired ensuite. Opulent textures, custom millwork, and ambient lighting create this sanctuary of relaxation.",
    challenge: "The homeowners desired a luxury suite that combined high-end aesthetics with practical functionality, while integrating smart home technology seamlessly.",
    solution: "We designed custom cabinetry that concealed technology while complementing the room's elegant aesthetic. Premium textiles and thoughtfully layered lighting created a space that transitions easily from day to night."
  },
  {
    id: 4,
    title: "Urban Loft Kitchen Renovation",
    category: "Residential",
    tags: ["Kitchen", "Industrial", "Modern"],
    year: "2021",
    location: "Chicago, IL",
    images: [
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1600607687644-a7e0722b0d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    description: "A complete transformation of a dated industrial space into a functional modern kitchen with high-end finishes. This former industrial space was transformed into a sleek kitchen with high-end appliances and creative storage solutions.",
    challenge: "Working within the constraints of the original loft architecture, including exposed pipes and limited wall space, while creating a highly functional chef's kitchen.",
    solution: "We embraced the industrial elements as design features, complementing them with warm wood tones and strategic lighting. Custom cabinetry was designed to maximize storage while maintaining the open feel of the loft."
  },
  {
    id: 5,
    title: "Executive Office Suite",
    category: "Commercial",
    tags: ["Office", "Professional", "Contemporary"],
    year: "2023",
    location: "New York, NY",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80",
      "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&auto=format&fit=crop&w=772&q=80"
    ],
    description: "A dynamic workspace that balances prestige with productivity for a financial services firm. A sophisticated workspace designed to impress clients while providing functional areas for productivity and collaboration.",
    challenge: "Creating a space that projected success and stability to clients while fostering collaboration and wellbeing for employees with diverse working styles.",
    solution: "We developed distinct zones for focused work, collaboration, and client meetings, using architectural elements and acoustic strategies to manage sound. Materials and finishes were selected to communicate the firm's brand values while ensuring longevity."
  },
  {
    id: 6,
    title: "Scandinavian-Inspired Dining Room",
    category: "Residential",
    tags: ["Dining Room", "Scandinavian", "Minimalist"],
    year: "2022",
    location: "Seattle, WA",
    images: [
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1633505899118-4ca6bd143043?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
      "https://images.unsplash.com/photo-1485754893304-65834eb08e1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=876&q=80"
    ],
    description: "A bright and airy dining space that combines functionality with understated elegance. Light woods, clean lines, and strategic pops of color characterize this airy dining space perfect for entertaining.",
    challenge: "The clients desired a dining area that could accommodate both intimate family dinners and larger gatherings, while maintaining a clean, harmonious aesthetic.",
    solution: "We designed an extendable dining table in light oak and paired it with comfortable, mixed seating. Strategic lighting, including a statement pendant, creates ambiance while highlighting the architecture of the space."
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Find the project by id
    const projectId = parseInt(id || '1');
    const foundProject = projectsData.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
      document.title = `${foundProject.title} - Yusluv Interior`;
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif">Project not found</h2>
          <p className="mt-4 mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section>
          <div className="h-[60vh] relative overflow-hidden">
            <img 
              src={project.images[0]} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
              <div className="container mx-auto px-4 pb-12">
                <h1 className="text-4xl md:text-5xl font-serif text-white font-semibold mb-4">
                  {project.title}
                </h1>
                <div className="flex items-center text-white space-x-4">
                  <span className="bg-yusluv-gold text-yusluv-dark px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center text-white/80">
                    <Calendar size={16} className="mr-1" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <MapPin size={16} className="mr-1" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Project Info */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold mb-4">Project Overview</h2>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-serif font-semibold mb-4">Challenge</h2>
                  <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-serif font-semibold mb-4">Solution</h2>
                  <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                </div>
              </div>
              
              {/* Project Metadata */}
              <div>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-serif font-semibold mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Category</h4>
                      <p>{project.category}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Location</h4>
                      <p>{project.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Completion</h4>
                      <p>{project.year}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Tags</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact" className="flex items-center justify-center">
                    Enquire About This Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-semibold mb-8">Project Gallery</h2>
            
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`} 
                        className="w-full h-[500px] object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Back to Portfolio */}
        <section className="py-12 text-center">
          <Button asChild variant="outline" className="mx-auto">
            <Link to="/portfolio" className="flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
