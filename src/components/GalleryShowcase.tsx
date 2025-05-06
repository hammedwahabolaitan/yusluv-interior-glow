
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Gallery, GalleryVertical, Images } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop',
    alt: 'Modern minimalist living room with white sofa and wooden accents',
    category: 'Living Room'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1974&auto=format&fit=crop',
    alt: 'Contemporary kitchen with marble countertops and wooden cabinets',
    category: 'Kitchen'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
    alt: 'Elegant master bedroom with neutral tones and textured bedding',
    category: 'Bedroom'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=2070&auto=format&fit=crop',
    alt: 'Luxurious bathroom with freestanding bathtub and marble tiles',
    category: 'Bathroom'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop',
    alt: 'Home office with built-in shelving and ergonomic workspace',
    category: 'Home Office'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1974&auto=format&fit=crop',
    alt: 'Dining room with custom table and statement chandelier',
    category: 'Dining Room'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop',
    alt: 'Outdoor patio with comfortable seating and greenery',
    category: 'Outdoor'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=2070&auto=format&fit=crop',
    alt: 'Entryway with console table and decorative mirror',
    category: 'Entryway'
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop',
    alt: 'Kids bedroom with playful elements and storage solutions',
    category: 'Kids Room'
  },
];

type ViewMode = 'carousel' | 'grid' | 'masonry';

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
          
          <div className="flex space-x-2 mb-8">
            <Button 
              variant={viewMode === 'carousel' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('carousel')}
              className="flex items-center gap-2"
            >
              <Images size={16} />
              <span>Carousel</span>
            </Button>
            <Button 
              variant={viewMode === 'grid' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('grid')}
              className="flex items-center gap-2"
            >
              <Gallery size={16} />
              <span>Grid</span>
            </Button>
            <Button 
              variant={viewMode === 'masonry' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('masonry')}
              className="flex items-center gap-2"
            >
              <GalleryVertical size={16} />
              <span>Masonry</span>
            </Button>
          </div>
        </div>

        {viewMode === 'carousel' && (
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id}>
                  <div className="p-1 h-full">
                    <Card className="border-none shadow-lg overflow-hidden">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </AspectRatio>
                      <CardContent className="p-4 bg-white/90 absolute bottom-0 w-full">
                        <div className="flex items-center justify-between">
                          <span className="bg-yusluv-gold text-yusluv-dark px-3 py-1 rounded-full text-sm font-medium">
                            {image.category}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        )}

        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id} className="border-none shadow-lg overflow-hidden">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </AspectRatio>
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
        )}

        {viewMode === 'masonry' && (
          <ScrollArea className="h-[600px] w-full">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {galleryImages.map((image) => (
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
        )}

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
