
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GalleryImage } from './types';

interface ImageLightboxProps {
  image: GalleryImage;
  images: GalleryImage[];
  onClose: () => void;
}

const ImageLightbox = ({ image, images, onClose }: ImageLightboxProps) => {
  const [currentImage, setCurrentImage] = useState<GalleryImage>(image);
  
  const currentIndex = images.findIndex(img => img.id === currentImage.id);
  
  const showPrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentImage(images[prevIndex]);
  };
  
  const showNext = () => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentImage(images[nextIndex]);
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrevious();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-6xl w-full p-0 bg-black border-none">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-50 rounded-full bg-black/50 text-white hover:bg-black/70"
          onClick={onClose}
        >
          <X />
        </Button>
        
        <div className="relative flex items-center justify-center h-[80vh]">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 z-10 rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={showPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={currentImage.src} 
              alt={currentImage.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 z-10 rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={showNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
        
        <div className="bg-black text-white p-4">
          <h2 className="text-xl font-medium">{currentImage.alt}</h2>
          {currentImage.description && (
            <p className="text-gray-300 mt-2">{currentImage.description}</p>
          )}
          <div className="flex justify-between items-center mt-2">
            <span className="bg-yusluv-gold text-yusluv-dark px-3 py-1 rounded-full text-sm font-medium">
              {currentImage.category}
            </span>
            {currentImage.date && (
              <span className="text-sm text-gray-300">{currentImage.date}</span>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
