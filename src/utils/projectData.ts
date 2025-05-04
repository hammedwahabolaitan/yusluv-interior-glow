
export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  year: string;
  location: string;
  image: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    category: "Residential",
    tags: ["Living Room", "Modern", "Minimalist"],
    year: "2022",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    description: "Clean lines, neutral palette, and statement furniture pieces define this contemporary space."
  },
  {
    id: 2,
    title: "Boutique Coffee Shop",
    category: "Commercial",
    tags: ["Cafe", "Industrial", "Rustic"],
    year: "2021",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1178&q=80",
    description: "Rustic meets industrial in this cozy yet spacious coffee shop that prioritizes customer experience."
  },
  {
    id: 3,
    title: "Luxury Master Bedroom Suite",
    category: "Residential",
    tags: ["Bedroom", "Luxury", "Contemporary"],
    year: "2022",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1616137148650-5f6946a1dd6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1202&q=80",
    description: "Opulent textures, custom millwork, and ambient lighting create this sanctuary of relaxation."
  },
  {
    id: 4,
    title: "Urban Loft Kitchen Renovation",
    category: "Residential",
    tags: ["Kitchen", "Industrial", "Modern"],
    year: "2021",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "This former industrial space was transformed into a sleek kitchen with high-end appliances and creative storage solutions."
  },
  {
    id: 5,
    title: "Executive Office Suite",
    category: "Commercial",
    tags: ["Office", "Professional", "Contemporary"],
    year: "2023",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "A sophisticated workspace designed to impress clients while providing functional areas for productivity and collaboration."
  },
  {
    id: 6,
    title: "Scandinavian-Inspired Dining Room",
    category: "Residential",
    tags: ["Dining Room", "Scandinavian", "Minimalist"],
    year: "2022",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    description: "Light woods, clean lines, and strategic pops of color characterize this airy dining space perfect for entertaining."
  }
];

// Gather all unique categories and tags
export const allCategories = Array.from(new Set(projects.map(project => project.category)));
export const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
