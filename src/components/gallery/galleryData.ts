
import { GalleryImage } from './types';

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop',
    alt: 'Modern minimalist living room with white sofa and wooden accents',
    category: 'Living Room',
    description: 'This contemporary living room design emphasizes clean lines and natural materials. A neutral color palette creates a calm atmosphere while wooden accents add warmth.',
    date: 'March 2023',
    designer: 'Emily Johnson',
    location: 'Seattle, WA',
    materials: ['Walnut wood', 'Linen', 'Brass accents', 'Natural stone'],
    styles: ['Minimalist', 'Scandinavian', 'Contemporary']
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1974&auto=format&fit=crop',
    alt: 'Contemporary kitchen with marble countertops and wooden cabinets',
    category: 'Kitchen',
    description: 'A blend of functionality and style, this kitchen features custom cabinetry, high-end appliances, and luxurious finishes that create both a practical cooking space and elegant entertaining area.',
    date: 'January 2023',
    designer: 'Michael Roberts',
    location: 'Portland, OR',
    materials: ['Marble', 'Oak wood', 'Stainless steel', 'Ceramic tile'],
    styles: ['Contemporary', 'Transitional']
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
    alt: 'Elegant master bedroom with neutral tones and textured bedding',
    category: 'Bedroom',
    description: 'This serene master bedroom creates a sanctuary-like retreat through layered textures, soft neutral tones, and statement lighting that balances sophistication with comfort.',
    date: 'June 2023',
    designer: 'Sarah Williams',
    location: 'Chicago, IL',
    materials: ['Velvet', 'Linen', 'Brushed brass', 'Natural wool'],
    styles: ['Transitional', 'Modern', 'Luxe']
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?q=80&w=2070&auto=format&fit=crop',
    alt: 'Luxurious bathroom with freestanding bathtub and marble tiles',
    category: 'Bathroom',
    description: 'This spa-inspired bathroom combines luxury and relaxation with a freestanding soaking tub, custom vanity, and premium fixtures that create a personal retreat experience.',
    date: 'February 2023',
    designer: 'David Chen',
    location: 'San Francisco, CA',
    materials: ['Marble', 'Brushed nickel', 'Glass', 'Ceramic'],
    styles: ['Spa', 'Modern', 'Luxury']
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop',
    alt: 'Home office with built-in shelving and ergonomic workspace',
    category: 'Home Office',
    description: 'A thoughtfully designed home office that balances productivity and aesthetics with custom built-ins, ergonomic furniture, and strategic lighting to support focus and creativity.',
    date: 'April 2023',
    designer: 'Jessica Lin',
    location: 'Boston, MA',
    materials: ['Walnut wood', 'Leather', 'Steel', 'Glass'],
    styles: ['Mid-century Modern', 'Industrial', 'Functional']
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1974&auto=format&fit=crop',
    alt: 'Dining room with custom table and statement chandelier',
    category: 'Dining Room',
    description: 'This elegant dining space centers around a custom-made table paired with comfortable seating and statement lighting designed for both everyday meals and special gatherings.',
    date: 'May 2023',
    designer: 'Robert Taylor',
    location: 'Austin, TX',
    materials: ['Oak wood', 'Velvet', 'Brass', 'Glass'],
    styles: ['Transitional', 'Contemporary', 'Elegant']
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1974&auto=format&fit=crop',
    alt: 'Outdoor patio with comfortable seating and greenery',
    category: 'Outdoor',
    description: "This outdoor living area extends the home's interior style with weather-resistant furniture, ambient lighting, and strategic landscaping to create a seamless indoor-outdoor experience.",
    date: 'July 2023',
    designer: 'Anna Martinez',
    location: 'Miami, FL',
    materials: ['Teak wood', 'All-weather fabric', 'Concrete', 'Natural stone'],
    styles: ['Resort', 'Contemporary', 'Tropical']
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=2070&auto=format&fit=crop',
    alt: 'Entryway with console table and decorative mirror',
    category: 'Entryway',
    description: "This welcoming entryway makes a strong first impression with a statement mirror, functional console, and curated accessories that set the tone for the home's overall design.",
    date: 'August 2023',
    designer: 'Thomas Wilson',
    location: 'Denver, CO',
    materials: ['Brass', 'Marble', 'Wood', 'Ceramic'],
    styles: ['Traditional', 'Eclectic', 'Curated']
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop',
    alt: 'Kids bedroom with playful elements and storage solutions',
    category: 'Kids Room',
    description: "This versatile children's bedroom incorporates playful elements, practical storage solutions, and adaptable furniture designed to evolve with the child's changing needs over time.",
    date: 'September 2023',
    designer: 'Lisa Johnson',
    location: 'Minneapolis, MN',
    materials: ['Natural wood', 'Cotton', 'Non-toxic paint', 'Wool'],
    styles: ['Playful', 'Scandinavian', 'Functional']
  },
];

// Helper function to find image by ID
export const getImageById = (id: string): GalleryImage | undefined => {
  return galleryImages.find(image => image.id === id);
};

// Helper function to get related images
export const getRelatedImages = (id: string, limit: number = 3): GalleryImage[] => {
  const currentImage = getImageById(id);
  if (!currentImage) return [];
  
  return galleryImages
    .filter(image => 
      image.id !== id && image.category === currentImage.category
    )
    .slice(0, limit);
};
