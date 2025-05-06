
import { ViewToggle } from './ViewToggle';
import { ViewMode } from './GalleryShowcase';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { GalleryImage } from './types';

interface ViewSwitcherProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  images: GalleryImage[];
  onFilterChange: (category: string | null) => void;
}

const ViewSwitcher = ({ viewMode, setViewMode, images, onFilterChange }: ViewSwitcherProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from images
  useEffect(() => {
    const uniqueCategories = Array.from(new Set(images.map(image => image.category)));
    setCategories(uniqueCategories);
  }, [images]);

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="space-y-6">
      <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Filter by Room Type</h3>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategorySelect(null)}
          >
            All Rooms
          </Button>
          
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewSwitcher;
