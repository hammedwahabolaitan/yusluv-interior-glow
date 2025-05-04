
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProjectGrid from '@/components/portfolio/ProjectGrid';
import { Project } from '@/utils/projectData';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginatedProjectGridProps {
  filteredProjects: Project[];
  clearFilters: () => void;
}

const PaginatedProjectGrid = ({ filteredProjects, clearFilters }: PaginatedProjectGridProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const PROJECTS_PER_PAGE = 6;
  
  // Get the current page from the URL or default to 1
  const currentPage = parseInt(searchParams.get('page') || '1');
  
  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
  const currentPageIndex = Math.min(Math.max(1, currentPage), totalPages);
  
  // Calculate projects for the current page
  const startIndex = (currentPageIndex - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  
  // Update URL when page changes
  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('page', page.toString());
    setSearchParams(newParams);
  };
  
  // Reset to page 1 when filtered projects change
  useEffect(() => {
    if (currentPageIndex > totalPages) {
      handlePageChange(1);
    }
  }, [filteredProjects.length]);
  
  // If no projects match the filters
  if (filteredProjects.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-serif mb-4">No projects match your filters</h3>
        <p className="mb-6 text-gray-600">Try adjusting your filter criteria or clearing all filters.</p>
        <button 
          onClick={clearFilters}
          className="bg-yusluv-charcoal text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <ProjectGrid filteredProjects={paginatedProjects} clearFilters={clearFilters} />
      
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            {/* Previous page button */}
            {currentPageIndex > 1 && (
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPageIndex - 1)}
                />
              </PaginationItem>
            )}
            
            {/* First page */}
            <PaginationItem>
              <PaginationLink 
                isActive={currentPageIndex === 1}
                onClick={() => handlePageChange(1)}
              >
                1
              </PaginationLink>
            </PaginationItem>
            
            {/* Middle pages */}
            {[...Array(totalPages)].map((_, i) => {
              const pageNumber = i + 1;
              
              // Skip first and last pages (they're handled separately)
              if (pageNumber === 1 || pageNumber === totalPages) return null;
              
              // Only show pages close to current page to avoid too many buttons
              if (
                pageNumber === currentPageIndex - 1 ||
                pageNumber === currentPageIndex ||
                pageNumber === currentPageIndex + 1
              ) {
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink 
                      isActive={currentPageIndex === pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                );
              }
              return null;
            })}
            
            {/* Last page (if more than one page) */}
            {totalPages > 1 && (
              <PaginationItem>
                <PaginationLink 
                  isActive={currentPageIndex === totalPages}
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}
            
            {/* Next page button */}
            {currentPageIndex < totalPages && (
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPageIndex + 1)}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default PaginatedProjectGrid;
