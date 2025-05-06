
import CarouselView from './CarouselView';
import GridView from './GridView';
import MasonryView from './MasonryView';
import { GalleryImage } from './types';
import { ViewMode } from './GalleryShowcase';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

interface GalleryViewerProps {
  viewMode: ViewMode;
  images: GalleryImage[];
}

const GalleryViewer = ({ viewMode, images }: GalleryViewerProps) => {
  if (images.length === 0) {
    return (
      <Alert variant="default" className="mb-6 bg-amber-50 border-amber-200">
        <AlertCircle className="h-4 w-4 text-amber-500" />
        <AlertDescription>
          No images found for the selected filter. Please try another category.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <>
      {viewMode === 'carousel' && <CarouselView images={images} />}
      {viewMode === 'grid' && <GridView images={images} />}
      {viewMode === 'masonry' && <MasonryView images={images} />}
    </>
  );
};

export default GalleryViewer;
