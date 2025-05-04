
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router-dom';

interface PortfolioFiltersProps {
  selectedCategory: string | null;
  selectedTag: string | null;
  allCategories: string[];
  allTags: string[];
  setSelectedCategory: (category: string | null) => void;
  setSelectedTag: (tag: string | null) => void;
  clearFilters: () => void;
}

const PortfolioFilters = ({
  selectedCategory,
  selectedTag,
  allCategories,
  allTags,
  setSelectedCategory,
  setSelectedTag,
  clearFilters
}: PortfolioFiltersProps) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  
  // Check if any filters are applied (including search)
  const hasActiveFilters = selectedCategory || selectedTag || searchQuery;

  return (
    <section className="py-8 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="mr-4">
            <h3 className="text-sm font-medium">Filter by:</h3>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {allCategories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={selectedCategory === category ? "bg-yusluv-charcoal" : ""}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="h-8 w-px bg-gray-300 mx-2"></div>
          
          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm" 
                className={selectedTag === tag ? "bg-yusluv-charcoal" : ""}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
          
          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="ml-auto"
            >
              Clear Filters
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioFilters;
