
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { GalleryImage } from './types';
import ImageLightbox from './ImageLightbox';
import { Eye } from 'lucide-react';

interface GridViewProps {
  images: GalleryImage[];
}

const GridView = ({ images }: GridViewProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <Card key={image.id} className="border-none shadow-lg overflow-hidden">
            <div className="relative group">
              <AspectRatio ratio={4/3}>
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </AspectRatio>
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
        ))}
      </div>

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

export default GridView;
