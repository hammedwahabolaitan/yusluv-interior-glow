export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  year: string;
  location: string;
  image: string;
  description: string;
  // Additional fields for project detail page
  images?: string[];
  challenge?: string;
  solution?: string;
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
    description: "Clean lines, neutral palette, and statement furniture pieces define this contemporary space.",
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1227&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
    ],
    challenge: "The clients wanted to maximize their compact living area while maintaining an uncluttered, minimalist aesthetic. The original space felt cramped and lacked proper lighting.",
    solution: "We focused on multi-functional furniture pieces and strategic lighting solutions. Custom built-ins provided storage while maintaining clean sightlines, and a neutral palette with strategic pops of color created visual interest without overwhelming the space."
  },
  {
    id: 2,
    title: "Boutique Coffee Shop",
    category: "Commercial",
    tags: ["Cafe", "Industrial", "Rustic"],
    year: "2021",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1178&q=80",
    description: "Rustic meets industrial in this cozy yet spacious coffee shop that prioritizes customer experience.",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1178&q=80", 
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80"
    ],
    challenge: "The client wanted to create a unique identity in a competitive market while maximizing the limited square footage available in their historic building location.",
    solution: "We preserved original architectural elements like exposed brick and wooden beams, complementing them with custom metalwork and sustainable materials. The layout was designed to optimize workflow for staff while creating distinct zones for various customer needs."
  },
  {
    id: 3,
    title: "Luxury Master Bedroom Suite",
    category: "Residential",
    tags: ["Bedroom", "Luxury", "Contemporary"],
    year: "2022",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1616137148650-5f6946a1dd6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1202&q=80",
    description: "Opulent textures, custom millwork, and ambient lighting create this sanctuary of relaxation.",
    images: [
      "https://images.unsplash.com/photo-1616137148650-5f6946a1dd6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1202&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1618221118493-9cfa1a38c92e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
    ],
    challenge: "The homeowners desired a luxury suite that combined high-end aesthetics with practical functionality, while integrating smart home technology seamlessly.",
    solution: "We designed custom cabinetry that concealed technology while complementing the room's elegant aesthetic. Premium textiles and thoughtfully layered lighting created a space that transitions easily from day to night."
  },
  {
    id: 4,
    title: "Urban Loft Kitchen Renovation",
    category: "Residential",
    tags: ["Kitchen", "Industrial", "Modern"],
    year: "2021",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "This former industrial space was transformed into a sleek kitchen with high-end appliances and creative storage solutions.",
    images: [
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1600607687644-a7e0722b0d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    challenge: "Working within the constraints of the original loft architecture, including exposed pipes and limited wall space, while creating a highly functional chef's kitchen.",
    solution: "We embraced the industrial elements as design features, complementing them with warm wood tones and strategic lighting. Custom cabinetry was designed to maximize storage while maintaining the open feel of the loft."
  },
  {
    id: 5,
    title: "Executive Office Suite",
    category: "Commercial",
    tags: ["Office", "Professional", "Contemporary"],
    year: "2023",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "A sophisticated workspace designed to impress clients while providing functional areas for productivity and collaboration.",
    images: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1332&q=80",
      "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&auto=format&fit=crop&w=772&q=80"
    ],
    challenge: "Creating a space that projected success and stability to clients while fostering collaboration and wellbeing for employees with diverse working styles.",
    solution: "We developed distinct zones for focused work, collaboration, and client meetings, using architectural elements and acoustic strategies to manage sound. Materials and finishes were selected to communicate the firm's brand values while ensuring longevity."
  },
  {
    id: 6,
    title: "Scandinavian-Inspired Dining Room",
    category: "Residential",
    tags: ["Dining Room", "Scandinavian", "Minimalist"],
    year: "2022",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    description: "Light woods, clean lines, and strategic pops of color characterize this airy dining space perfect for entertaining.",
    images: [
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1633505899118-4ca6bd143043?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
      "https://images.unsplash.com/photo-1485754893304-65834eb08e1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=876&q=80"
    ],
    challenge: "The clients desired a dining area that could accommodate both intimate family dinners and larger gatherings, while maintaining a clean, harmonious aesthetic.",
    solution: "We designed an extendable dining table in light oak and paired it with comfortable, mixed seating. Strategic lighting, including a statement pendant, creates ambiance while highlighting the architecture of the space."
  }
];

// Gather all unique categories and tags
export const allCategories = Array.from(new Set(projects.map(project => project.category)));
export const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

// Helper function to get project details by ID
export const getProjectById = (id: number): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get related projects
export const getRelatedProjects = (id: number, limit: number = 3): Project[] => {
  const currentProject = getProjectById(id);
  if (!currentProject) return [];
  
  return projects
    .filter(project => 
      project.id !== id && 
      (project.category === currentProject.category || 
       project.tags.some(tag => currentProject.tags.includes(tag)))
    )
    .slice(0, limit);
};
