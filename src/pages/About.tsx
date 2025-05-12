
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "YUSUF AZEEZ",
    role: "Principal Designer & Founder",
    bio: "With over 7 years of experience in the design industry, Maria brings a wealth of knowledge and an eye for transformative spaces. Her work has been featured in Architectural Digest and Elle Decor.",
    image: "https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/469584796_17988702113756920_7725602298227192700_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeExF8ZjKZRGU0dDB2PV1F4eFRh8V6bHXhwVGHxXpsdeHCq07Xd1EjT49Z5drlnz8gsF_Nyl3zj2OXjKO5E1M8Gc&_nc_ohc=klcrcSYMcXQQ7kNvwGXwLpT&_nc_oc=Adkn1rSGuEE2g0va2eLtqXtrDFI3_opclJTOhVMFZ6NlLmFJcnROfLY-eVU-tqQPQwQ&_nc_zt=23&_nc_ht=scontent-mad1-1.xx&_nc_gid=qpJPD4zDW12OjSB89LlwmQ&oh=00_AfJVeiSOdwVfKJwy0vAHqvJCwoxsYATCyAztvPBqwiChxg&oe=6827DE84"
  },
  {
    id: 2,
    name: "David Thompson",
    role: "Senior Interior Designer",
    bio: "David specializes in blending functional design with aesthetic beauty. His background in architecture allows him to approach spaces with a comprehensive understanding of structure and flow.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Commercial Design Specialist",
    bio: "Sophia has transformed numerous commercial spaces across the country. Her designs focus on creating environments that enhance productivity and reflect brand identity.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = 'About Us - Yusluv Interior';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-yusluv-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">About Yusluv Interior & furniture</h1>
              <p className="text-lg text-gray-700">
                Crafting beautiful, functional spaces that reflect our clients' unique stories and enhance their everyday lives.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2019, Yusluv Interior & Furniture began with a simple mission: creating inspiring spaces. What started as a small design studio has grown into a full-service interior design firm with a portfolio spanning residential and commercial projects across the country.
                </p>
                <p className="text-gray-700 mb-4">
                  Our approach combines timeless design principles with contemporary innovations, resulting in beautiful and functional spaces. We believe that great design should not only please the eye but also enhance the way you live or work.
                </p>
                <p className="text-gray-700">
                  At Yusluv Interior, we pride ourselves on our collaborative process. We listen closely to our clients' needs, preferences, and lifestyles to create personalized spaces that truly feel like home or workplaces that boost productivity and well-being.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Interior design workspace"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-yusluv-gold p-6 hidden md:block">
                  <p className="text-3xl font-serif font-bold">12+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-yusluv-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-semibold mb-4">Thoughtful Design</h3>
                <p className="text-gray-700">
                  We create spaces that consider both aesthetics and functionality, ensuring every element serves a purpose while contributing to the overall beauty.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-semibold mb-4">Client Collaboration</h3>
                <p className="text-gray-700">
                  We view our relationship with clients as a partnership, working together to bring their vision to life while guiding them with our expertise.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-semibold mb-4">Sustainable Practices</h3>
                <p className="text-gray-700">
                  We incorporate eco-friendly materials and practices whenever possible, creating beautiful spaces that are also responsible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mb-6 border-4 border-white shadow-lg"
                  />
                  <h3 className="text-xl font-serif font-semibold">{member.name}</h3>
                  <p className="text-yusluv-gold mb-3">{member.role}</p>
                  <Separator className="w-16 bg-yusluv-gold h-0.5 mb-3" />
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 md:py-24 bg-yusluv-charcoal text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-semibold mb-12">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6">
                <h3 className="text-4xl font-serif font-bold text-yusluv-gold mb-2">250+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-serif font-bold text-yusluv-gold mb-2">15</h3>
                <p className="text-gray-300">Design Awards</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-serif font-bold text-yusluv-gold mb-2">12</h3>
                <p className="text-gray-300">Years of Experience</p>
              </div>
              <div className="p-6">
                <h3 className="text-4xl font-serif font-bold text-yusluv-gold mb-2">98%</h3>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
