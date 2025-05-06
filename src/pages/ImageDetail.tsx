
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { getImageById, getRelatedImages } from '@/components/gallery/galleryData';
import { GalleryImage } from '@/components/gallery/types';
import RelatedImagesSection from '@/components/gallery/RelatedImagesSection';
import ImageMetadataSection from '@/components/gallery/ImageMetadataSection';

const ImageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [image, setImage] = useState<GalleryImage | undefined>(undefined);
  const [relatedImages, setRelatedImages] = useState<GalleryImage[]>([]);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    if (id) {
      const foundImage = getImageById(id);
      if (foundImage) {
        setImage(foundImage);
        document.title = `${foundImage.alt} - Yusluv Interior Gallery`;
        
        const related = getRelatedImages(id, 3);
        setRelatedImages(related);
      } else {
        // Redirect to gallery if image not found
        navigate('/gallery');
      }
    }
  }, [id, navigate]);

  if (!image) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif mb-4">Image not found</h1>
            <Button variant="outline" onClick={() => navigate('/gallery')}>
              Return to Gallery
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Image */}
        <div className="h-[60vh] relative overflow-hidden">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <h1 className="text-4xl md:text-5xl font-serif text-white font-semibold mb-4">
                {image.alt}
              </h1>
              <span className="bg-yusluv-gold text-yusluv-dark px-3 py-1 rounded-full text-sm font-medium">
                {image.category}
              </span>
            </div>
          </div>
        </div>

        {/* Image Details */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Image Description */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-serif font-semibold mb-6">About This Design</h2>
                <p className="text-gray-600 mb-8">{image.description}</p>
                
                {image.designer && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-2">Designed By</h3>
                    <p className="text-gray-600">{image.designer}</p>
                  </div>
                )}
                
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/gallery')}
                  className="flex items-center"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Back to Gallery
                </Button>
              </div>
              
              {/* Image Metadata */}
              <ImageMetadataSection image={image} />
            </div>
          </div>
        </section>

        {/* Related Images */}
        {relatedImages.length > 0 && (
          <RelatedImagesSection images={relatedImages} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ImageDetail;
