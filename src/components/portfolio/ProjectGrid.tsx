
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Project } from '@/utils/projectData';
import { motion } from 'framer-motion';

interface ProjectGridProps {
  filteredProjects: Project[];
  clearFilters: () => void;
}

const ProjectGrid = ({ filteredProjects, clearFilters }: ProjectGridProps) => {
  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-serif mb-4">No projects match your filters</h3>
        <p className="mb-6 text-gray-600">Try adjusting your filter criteria or clearing all filters.</p>
        <Button onClick={clearFilters}>Clear All Filters</Button>
      </div>
    );
  }

  // Animation variants for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {filteredProjects.map((project) => (
        <motion.div 
          key={project.id} 
          className="group"
          variants={itemVariants}
        >
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
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
