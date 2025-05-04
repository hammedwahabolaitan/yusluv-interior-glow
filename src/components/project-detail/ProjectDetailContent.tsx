
import ProjectInfo from './ProjectInfo';
import ProjectMetadata from './ProjectMetadata';
import ProjectGallery from './ProjectGallery';
import RelatedProjects from './RelatedProjects';
import { Project, projects } from '@/utils/projectData';

interface ProjectDetailContentProps {
  project: Project;
}

const ProjectDetailContent = ({ project }: ProjectDetailContentProps) => {
  return (
    <>
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
    </>
  );
};

export default ProjectDetailContent;
