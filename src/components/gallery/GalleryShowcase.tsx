
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ViewSwitcher from './ViewSwitcher';
import GalleryViewer from './GalleryViewer';
import { galleryImages } from './galleryData';

export type ViewMode = 'carousel' | 'grid' | 'masonry';

const GalleryShowcase = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('carousel');

  return (
    <section className="py-16 bg-yusluv-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center">Our Interior Gallery</h2>
          <p className="text-gray-600 max-w-2xl text-center mb-8">
            Explore our curated collection of stunning interior designs that showcase our attention to detail 
            and commitment to creating beautiful, functional spaces.
          </p>
          
          <ViewSwitcher viewMode={viewMode} setViewMode={setViewMode} />
        </div>

        <GalleryViewer viewMode={viewMode} images={galleryImages} />

        <div className="flex justify-center mt-12">
          <Button asChild variant="default" size="lg">
            <Link to="/portfolio">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
