
import { MapPin, Calendar } from 'lucide-react';

interface ProjectDetailHeroProps {
  title: string;
  category: string;
  year: string;
  location: string;
  heroImage: string;
}

const ProjectDetailHero = ({ 
  title, 
  category, 
  year, 
  location, 
  heroImage 
}: ProjectDetailHeroProps) => {
  return (
    <div className="h-[60vh] relative overflow-hidden">
      <img 
        src={heroImage} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
        <div className="container mx-auto px-4 pb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-semibold mb-4">
            {title}
          </h1>
          <div className="flex items-center text-white space-x-4">
            <span className="bg-yusluv-gold text-yusluv-dark px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
            <div className="flex items-center text-white/80">
              <Calendar size={16} className="mr-1" />
              <span>{year}</span>
            </div>
            <div className="flex items-center text-white/80">
              <MapPin size={16} className="mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailHero;
