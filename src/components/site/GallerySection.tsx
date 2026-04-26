import { motion } from "framer-motion";
import { ArrowRight, ZoomIn } from "lucide-react";
import heroImg from "@/assets/hero-lake.jpg";
import room1 from "@/assets/room-1.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";

const galleryImages = [
  { src: heroImg, alt: "Kayaloram exterior", className: "col-start-1 row-start-2 row-span-1" },
  { src: room1, alt: "Kayaloram interior", className: "col-start-2 row-start-1 row-span-2" },
  { src: g1, alt: "Kayaloram evening", className: "col-start-2 row-start-3 row-span-1" },
  { src: g2, alt: "Kayaloram pool", className: "col-start-3 row-start-1 row-span-1" },
  { src: heroImg, alt: "Kayaloram backwaters", className: "col-start-3 row-start-2 row-span-2" },
  { src: room1, alt: "Kayaloram rooms", className: "col-start-4 row-start-2 row-span-1" },
];

export const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#eefaf8] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f3c3a_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        
        {/* Header Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl text-left">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-dancing text-3xl text-[#4a5568] mb-1"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Best Memorable Places
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#112a29] mb-6"
            >
              Discover A Brand Luxurious Hotel & Resort
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-sm md:text-base leading-relaxed"
            >
              Discover the essence of tranquility at Kayaloram Resort, ideally situated in the serene backwaters of Alleppey. Embraced by the serenity of nature, our resort offers a sanctuary for those seeking an escape from the hustle and bustle of city life. Immerse yourself in the lush greenery that envelops our resort, creating an eco-friendly haven for all our guests to enjoy.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="/gallery" className="inline-flex items-center gap-2 bg-[#124b49] hover:bg-[#0c302d] text-white px-8 py-3.5 rounded-full font-medium transition-colors shadow-lg whitespace-nowrap">
              Enter Gallery <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        </div>

        {/* Custom CSS Grid Masonry Layout */}
        <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer ${img.className}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Fallback Grid */}
        <div className="grid md:hidden grid-cols-2 gap-4">
           {galleryImages.map((img, index) => (
            <motion.div
              key={`mob-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-sm aspect-square"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
