
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GalleryImage } from './types';
import ImageLightbox from './ImageLightbox';
import { Eye } from 'lucide-react';

interface MasonryViewProps {
  images: GalleryImage[];
}

const MasonryView = ({ images }: MasonryViewProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <ScrollArea className="h-[600px] w-full">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image) => (
            <div key={image.id} className="break-inside-avoid mb-4">
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="relative group">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="bg-white/90 rounded-full p-2">
                      <Eye className="h-6 w-6 text-gray-800" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="bg-yusluv-gold text-yusluv-dark px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </ScrollArea>

      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          images={images}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default MasonryView;
