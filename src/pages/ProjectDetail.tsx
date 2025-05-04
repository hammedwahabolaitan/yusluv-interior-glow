
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ProjectDetailHero from '@/components/project-detail/ProjectDetailHero';
import ProjectInfo from '@/components/project-detail/ProjectInfo';
import ProjectMetadata from '@/components/project-detail/ProjectMetadata';
import ProjectGallery from '@/components/project-detail/ProjectGallery';
import RelatedProjects from '@/components/project-detail/RelatedProjects';
import { getProjectById, projects } from '@/utils/projectData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ReturnType<typeof getProjectById>>(undefined);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Find the project by id
    const projectId = parseInt(id || '1');
    const foundProject = getProjectById(projectId);
    
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
        <ProjectDetailHero
          title={project.title}
          category={project.category}
          year={project.year}
          location={project.location}
          heroImage={project.images?.[0] || project.image}
        />

        {/* Project Details */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Project Info */}
              <div className="lg:col-span-2">
                <ProjectInfo 
                  description={project.description}
                  challenge={project.challenge || ''}
                  solution={project.solution || ''}
                />
              </div>
              
              {/* Project Metadata */}
              <div>
                <ProjectMetadata
                  category={project.category}
                  location={project.location}
                  year={project.year}
                  tags={project.tags}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <ProjectGallery images={project.images} title={project.title} />
        )}

        {/* Related Projects */}
        <RelatedProjects currentProject={project} allProjects={projects} />

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
