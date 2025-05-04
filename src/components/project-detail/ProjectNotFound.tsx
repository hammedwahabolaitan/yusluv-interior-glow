
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProjectNotFound = () => {
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
};

export default ProjectNotFound;
