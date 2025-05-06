
import CarouselView from './CarouselView';
import GridView from './GridView';
import MasonryView from './MasonryView';
import { GalleryImage } from './types';
import { ViewMode } from './GalleryShowcase';

interface GalleryViewerProps {
  viewMode: ViewMode;
  images: GalleryImage[];
}

const GalleryViewer = ({ viewMode, images }: GalleryViewerProps) => {
  return (
    <>
      {viewMode === 'carousel' && <CarouselView images={images} />}
      {viewMode === 'grid' && <GridView images={images} />}
      {viewMode === 'masonry' && <MasonryView images={images} />}
    </>
  );
};

export default GalleryViewer;
