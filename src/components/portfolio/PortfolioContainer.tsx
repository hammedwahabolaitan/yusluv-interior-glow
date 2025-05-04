
import { useState, useEffect } from 'react';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioFilters from '@/components/portfolio/PortfolioFilters';
import ProjectGrid from '@/components/portfolio/ProjectGrid';
import { projects, allCategories, allTags, Project } from '@/utils/projectData';

const PortfolioContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
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
    <>
      <PortfolioHero />
      <PortfolioFilters 
        selectedCategory={selectedCategory}
        selectedTag={selectedTag}
        allCategories={allCategories}
        allTags={allTags}
        setSelectedCategory={setSelectedCategory}
        setSelectedTag={setSelectedTag}
        clearFilters={clearFilters}
      />
      <section className="py-12 md:py-16 portfolio-projects">
        <div className="container mx-auto px-4">
          <ProjectGrid 
            filteredProjects={filteredProjects} 
            clearFilters={clearFilters} 
          />
        </div>
      </section>
    </>
  );
};

export default PortfolioContainer;
