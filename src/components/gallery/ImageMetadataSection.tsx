
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';
import { GalleryImage } from './types';

interface ImageMetadataSectionProps {
  image: GalleryImage;
}

const ImageMetadataSection = ({ image }: ImageMetadataSectionProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Details</h3>
      
      <div className="space-y-4">
        {image.date && (
          <div className="flex items-start gap-2">
            <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="font-medium">Date</p>
              <p className="text-gray-600">{image.date}</p>
            </div>
          </div>
        )}
        
        {image.location && (
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-gray-600">{image.location}</p>
            </div>
          </div>
        )}
        
        {image.materials && image.materials.length > 0 && (
          <div>
            <p className="font-medium mb-2">Materials</p>
            <div className="flex flex-wrap gap-2">
              {image.materials.map((material, index) => (
                <Badge key={index} variant="outline" className="bg-white">
                  {material}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {image.styles && image.styles.length > 0 && (
          <div>
            <p className="font-medium mb-2">Design Styles</p>
            <div className="flex flex-wrap gap-2">
              {image.styles.map((style, index) => (
                <Badge key={index} variant="secondary">
                  {style}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageMetadataSection;
