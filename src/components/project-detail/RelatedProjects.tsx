
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Project } from '@/utils/projectData';

interface RelatedProjectsProps {
  currentProject: Project;
  allProjects: Project[];
}

const RelatedProjects = ({ currentProject, allProjects }: RelatedProjectsProps) => {
  // Find related projects by category or tags
  const relatedProjects = allProjects
    .filter(project => 
      project.id !== currentProject.id && 
      (project.category === currentProject.category || 
       project.tags.some(tag => currentProject.tags.includes(tag)))
    )
    .slice(0, 3); // Limit to 3 related projects

  if (relatedProjects.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-serif font-semibold mb-8">Related Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map(project => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-serif mb-2">{project.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <span>{project.category}</span>
                </div>
                <Link 
                  to={`/portfolio/${project.id}`} 
                  className="inline-flex items-center text-yusluv-charcoal font-medium group-hover:text-yusluv-gold transition-colors"
                >
                  View Details
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
