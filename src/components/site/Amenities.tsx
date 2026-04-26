import { motion } from "framer-motion";
import { Utensils, Music, BedDouble, Bath, Sun, Sailboat } from "lucide-react";

const amenitiesData = [
  {
    title: "Indoor Spaces",
    icon: Sun,
    desc: "Discover airy, light-filled spaces on the ground floor designed for absolute comfort and deep connection.",
  },
  {
    title: "Spacious Living",
    icon: Music,
    desc: "Relax in the open lawn area, enjoy board games, or unwind with our rain dance shower setup featuring music and lights.",
  },
  {
    title: "Modern Kitchen",
    icon: Utensils,
    desc: "Fully equipped for light cooking and heating. Complimentary drinking water is provided for your convenience.",
  },
  {
    title: "Comfortable Bedrooms",
    icon: BedDouble,
    desc: "Air-conditioned rooms featuring queen-sized beds, beautiful lake views, work desks, and optional extra mattresses.",
  },
  {
    title: "Modern Bathrooms",
    icon: Bath,
    desc: "Enjoy pristine attached bathrooms with modern fittings, geysers, fresh towels, and complimentary toiletries.",
  },
  {
    title: "Fishing & Thoni Ride",
    icon: Sailboat,
    desc: "Experience traditional Kerala water travel in a 'Thoni' (light boat) and enjoy relaxing fishing sessions by the lake.",
  },
];

export const Amenities = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f4f9f8]">
      <div className="container px-4 mx-auto max-w-6xl text-center">
        
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-[#112a29] mb-4"
        >
          Explore Our <span className="text-[#1da855]">AMENITIES</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-sm md:text-base mb-16"
        >
          Discover our world-class amenities designed to make your stay unforgettable
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {amenitiesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="relative group w-full h-full"
            >
              {/* Drop shadow wrapper (since mask-image clips normal box-shadow) */}
              <div className="w-full h-full drop-shadow-[0_8px_20px_rgb(0,0,0,0.06)] hover:drop-shadow-[0_12px_25px_rgb(0,0,0,0.12)] transition-all duration-300">
                
                {/* Decorative blob behind the cutout */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#dcf0eb] rounded-bl-full rounded-tr-[24px] z-0 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 origin-top-right"></div>
                
                {/* The Main Card with Concave Cutout */}
                <div 
                  className="bg-white p-8 relative z-10 flex flex-col items-center text-center h-full transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    borderRadius: "24px",
                    WebkitMaskImage: "radial-gradient(circle 35px at top right, transparent 34px, black 35px)",
                    maskImage: "radial-gradient(circle 35px at top right, transparent 34px, black 35px)"
                  }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-[18px] bg-[#124b49] flex items-center justify-center text-white mb-6 relative transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-[#112a29] mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
