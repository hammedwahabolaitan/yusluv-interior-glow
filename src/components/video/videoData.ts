
export interface VideoItem {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  thumbnail?: string;
  source: string;
  sourceUrl: string;
}

export const videoData: VideoItem[] = [
  {
    id: '1',
    title: 'Interior Design Trends for 2025',
    description: 'Explore the latest interior design trends for 2025, featuring sustainable materials, biophilic design elements, and multifunctional spaces that adapt to our changing lifestyles.',
    embedUrl: 'https://www.youtube.com/embed/VnvSIkliK2U',
    thumbnail: 'https://i.ytimg.com/vi/VnvSIkliK2U/hqdefault.jpg',
    source: 'Pinterest via YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=VnvSIkliK2U'
  },
  {
    id: '2',
    title: 'Small Space Design Solutions',
    description: 'Creative solutions for maximizing small spaces while maintaining style and functionality. Learn techniques from professional designers to make the most of limited square footage.',
    embedUrl: 'https://www.youtube.com/embed/GP6vPGWFLE4',
    thumbnail: 'https://i.ytimg.com/vi/GP6vPGWFLE4/hqdefault.jpg',
    source: 'Pinterest via YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=GP6vPGWFLE4'
  },
  {
    id: '3',
    title: 'Luxury Home Makeover Transformation',
    description: 'Follow a complete luxury home transformation from concept to completion. See how professional designers tackle challenges and create stunning spaces.',
    embedUrl: 'https://www.youtube.com/embed/0RW_hhOU_18',
    thumbnail: 'https://i.ytimg.com/vi/0RW_hhOU_18/hqdefault.jpg',
    source: 'Pinterest via YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=0RW_hhOU_18'
  },
  {
    id: '4',
    title: 'Color Psychology in Interior Design',
    description: 'Learn how professional designers use color psychology to create specific moods and atmospheres in interior spaces. Discover how to apply these principles in your own home.',
    embedUrl: 'https://www.youtube.com/embed/rDOXxa9cKNQ',
    thumbnail: 'https://i.ytimg.com/vi/rDOXxa9cKNQ/hqdefault.jpg',
    source: 'Pinterest via YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=rDOXxa9cKNQ'
  },
  {
    id: '5',
    title: 'Kitchen Design Masterclass',
    description: 'A comprehensive guide to professional kitchen design, covering layout planning, material selection, lighting, and functional considerations for the heart of your home.',
    embedUrl: 'https://www.youtube.com/embed/KOvXvkn-ioA',
    thumbnail: 'https://i.ytimg.com/vi/KOvXvkn-ioA/hqdefault.jpg',
    source: 'Pinterest via YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=KOvXvkn-ioA'
  }
];
