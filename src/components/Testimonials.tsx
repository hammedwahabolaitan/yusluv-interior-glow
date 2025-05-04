
import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Anderson",
    role: "Homeowner",
    content: "Yusluv Interior transformed our dated living space into an elegant, functional area that perfectly reflects our style. Their attention to detail and ability to listen made all the difference.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
  },
  {
    id: 2,
    name: "Mark Stevens",
    role: "Restaurant Owner",
    content: "The team at Yusluv understood our brand vision immediately. They created an atmosphere that has customers consistently complimenting the ambiance. Our bookings have increased by 40% since the redesign.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Real Estate Developer",
    content: "We've partnered with Yusluv on multiple projects, and they consistently deliver designs that help our properties sell faster and at premium prices. Their staging expertise is unmatched.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-yusluv-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Client Testimonials</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with Yusluv Interior.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial */}
          <div className="relative min-h-[240px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center text-center ${
                  index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Quote size={48} className="text-yusluv-gold opacity-30 mb-4" />
                <p className="text-lg md:text-xl mb-8 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex flex-col items-center">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-yusluv-gold mb-3"
                    />
                  )}
                  <h4 className="font-semibold text-yusluv-gold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-yusluv-gold w-6' : 'bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
