
import { Button } from '@/components/ui/button';
import { GalleryHorizontal, GalleryVertical, Images } from 'lucide-react';

type ViewMode = 'carousel' | 'grid' | 'masonry';

interface ViewToggleProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

const ViewToggle = ({ viewMode, setViewMode }: ViewToggleProps) => {
  return (
    <div className="flex space-x-2 mb-8">
      <Button 
        variant={viewMode === 'carousel' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => setViewMode('carousel')}
        className="flex items-center gap-2"
      >
        <Images size={16} />
        <span>Carousel</span>
      </Button>
      <Button 
        variant={viewMode === 'grid' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => setViewMode('grid')}
        className="flex items-center gap-2"
      >
        <GalleryHorizontal size={16} />
        <span>Grid</span>
      </Button>
      <Button 
        variant={viewMode === 'masonry' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => setViewMode('masonry')}
        className="flex items-center gap-2"
      >
        <GalleryVertical size={16} />
        <span>Masonry</span>
      </Button>
    </div>
  );
};

export default ViewToggle;
