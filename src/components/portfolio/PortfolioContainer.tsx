
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PortfolioHero from '@/components/portfolio/PortfolioHero';
import PortfolioFilters from '@/components/portfolio/PortfolioFilters';
import PaginatedProjectGrid from '@/components/portfolio/PaginatedProjectGrid';
import SearchBox from '@/components/portfolio/SearchBox';
import { projects, allCategories, allTags, Project } from '@/utils/projectData';

const PortfolioContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  // Get filter values from URL params
  const selectedCategory = searchParams.get('category');
  const selectedTag = searchParams.get('tag');
  const searchQuery = searchParams.get('search');

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
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, selectedTag, searchQuery]);

  return (
    <>
      <PortfolioHero />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <SearchBox placeholder="Search by project name, location, or description..." />
          </div>
        </div>
        <PortfolioFilters 
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          allCategories={allCategories}
          allTags={allTags}
          setSelectedCategory={setSelectedCategory}
          setSelectedTag={setSelectedTag}
          clearFilters={clearFilters}
        />
      </div>
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
