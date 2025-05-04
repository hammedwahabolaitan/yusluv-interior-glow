
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioFilters from '@/components/portfolio/PortfolioFilters';
import PaginatedProjectGrid from '@/components/portfolio/PaginatedProjectGrid';
import { projects, allCategories, allTags, Project } from '@/utils/projectData';

const PortfolioContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  // Get filter values from URL params
  const selectedCategory = searchParams.get('category');
  const selectedTag = searchParams.get('tag');

  // Update filters in URL
  const setSelectedCategory = (category: string | null) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (category) {
      newParams.set('category', category);
      // Reset to page 1 when changing filters
      newParams.set('page', '1');
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  const setSelectedTag = (tag: string | null) => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (tag) {
      newParams.set('tag', tag);
      // Reset to page 1 when changing filters
      newParams.set('page', '1');
    } else {
      newParams.delete('tag');
    }
    setSearchParams(newParams);
  };

  // Clear all filters
  const clearFilters = () => {
    const newParams = new URLSearchParams();
    // Preserve page parameter if it exists
    const page = searchParams.get('page');
    if (page) {
      newParams.set('page', page);
    }
    setSearchParams(newParams);
  };

  // Apply filters whenever URL params change
  useEffect(() => {
    let filtered = [...projects];
    
    if (selectedCategory) {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    if (selectedTag) {
      filtered = filtered.filter(project => project.tags.includes(selectedTag));
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, selectedTag]);

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
          <PaginatedProjectGrid 
            filteredProjects={filteredProjects} 
            clearFilters={clearFilters} 
          />
        </div>
      </section>
    </>
  );
};

export default PortfolioContainer;
