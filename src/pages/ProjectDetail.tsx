
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectDetailHero from '@/components/project-detail/ProjectDetailHero';
import ProjectDetailContent from '@/components/project-detail/ProjectDetailContent';
import ProjectNotFound from '@/components/project-detail/ProjectNotFound';
import BackToPortfolioButton from '@/components/project-detail/BackToPortfolioButton';
import { getProjectById } from '@/utils/projectData';

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
    return <ProjectNotFound />;
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

        {/* Project Content */}
        <ProjectDetailContent project={project} />

        {/* Back to Portfolio */}
        <BackToPortfolioButton />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
