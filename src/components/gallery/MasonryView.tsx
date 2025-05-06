
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { GalleryImage } from './types';

interface MasonryViewProps {
  images: GalleryImage[];
}

const MasonryView = ({ images }: MasonryViewProps) => {
  return (
    <ScrollArea className="h-[600px] w-full">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image) => (
          <div key={image.id} className="break-inside-avoid mb-4">
            <Card className="border-none shadow-lg overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
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
  );
};

export default MasonryView;
