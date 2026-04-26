import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya",
    room: "Deluxe Room",
    text: "I stayed here for a work trip, and it turned into a mini vacation. The Wi-Fi was strong enough for my meetings, and the evenings were spent enjoying the spa and delicious food. A great balance of work and relaxation.",
    stars: 5,
    initials: "PR"
  },
  {
    name: "Joseph",
    room: "Traveller",
    text: "A dream destination for couples looking for peace and romance. The lake views were mesmerizing, and the staff went above and beyond to make our anniversary special.",
    stars: 5,
    initials: "JS"
  },
  {
    name: "Rahul",
    room: "Family Suite",
    text: "Had the most relaxing holiday here! The staff were so welcoming, the rooms were spotless, and the kids loved outdoor activities. It felt like home but with a beautiful view.",
    stars: 5,
    initials: "RH"
  },
  {
    name: "Ananya",
    room: "Cinemon Lake View",
    text: "Absolutely stunning property! Waking up to the serene backwaters right outside the window was an unforgettable experience. Highly recommend for nature lovers.",
    stars: 5,
    initials: "AN"
  },
  {
    name: "Vikram",
    room: "Business Traveller",
    text: "Exceptional service and beautiful architecture. The blend of traditional Kerala style with modern amenities makes this place truly unique. Will definitely be coming back!",
    stars: 5,
    initials: "VK"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        
        {/* Header */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-dancing text-3xl text-[#4a5568] mb-1"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Testimonial
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-[#112a29] mb-16"
        >
          What Client Say About us
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative h-[300px] md:h-[280px] w-full max-w-5xl mx-auto flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {testimonials.map((t, index) => {
              // Calculate relative position (-1, 0, 1) handling wrap-around
              let offset = index - activeIndex;
              if (offset < -2) offset += testimonials.length;
              if (offset > 2) offset -= testimonials.length;

              // Only render the visible cards (-1, 0, 1)
              if (offset < -1 || offset > 1) return null;

              const isActive = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              return (
                <motion.div
                  key={t.name}
                  layout
                  initial={{ opacity: 0, x: isLeft ? -100 : isRight ? 100 : 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.6, 
                    x: isActive ? 0 : isLeft ? "-55%" : "55%", 
                    scale: isActive ? 1 : 0.85,
                    zIndex: isActive ? 10 : 0
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
                  className={`absolute w-[90%] md:w-[450px] p-8 md:p-10 rounded-[24px] shadow-lg text-left cursor-pointer transition-colors duration-500
                    ${isActive ? 'bg-[#f0f8f8]' : 'bg-white border border-gray-100'}
                  `}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                        ${isActive ? 'bg-[#1da855] text-white' : 'bg-[#e2e8f0] text-[#475569]'}
                      `}>
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#112a29] text-lg">{t.name}</h4>
                        <p className="text-xs text-gray-500">{t.room}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                    "{t.text}"
                  </p>

                  {/* Bottom Quote Badge */}
                  <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-colors duration-500
                    ${isActive ? 'bg-[#1cb0c4] text-white' : 'bg-white text-[#1cb0c4]'}
                  `}>
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? "bg-[#1cb0c4] scale-125" 
                  : "bg-transparent border border-gray-400 hover:border-[#1cb0c4]"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
