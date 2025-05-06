
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { GalleryImage } from './types';

interface RelatedImagesSectionProps {
  images: GalleryImage[];
}

const RelatedImagesSection = ({ images }: RelatedImagesSectionProps) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-serif font-semibold mb-8">Related Designs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <Link to={`/gallery/image/${image.id}`} key={image.id}>
              <Card className="border-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg truncate">{image.alt}</h3>
                    <span className="bg-yusluv-gold text-yusluv-dark px-3 py-1 rounded-full text-sm font-medium mt-2 inline-block">
                      {image.category}
                    </span>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedImagesSection;
