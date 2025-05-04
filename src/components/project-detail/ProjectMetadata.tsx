
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ProjectMetadataProps {
  category: string;
  location: string;
  year: string;
  tags: string[];
}

const ProjectMetadata = ({ category, location, year, tags }: ProjectMetadataProps) => {
  return (
    <div>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-serif font-semibold mb-4">Project Details</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Category</h4>
            <p>{category}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-500">Location</h4>
            <p>{location}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-500">Completion</h4>
            <p>{year}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-500">Tags</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
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
  );
};

export default ProjectMetadata;
