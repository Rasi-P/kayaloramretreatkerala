import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import room1 from "@/assets/room-1.jpg";
import heroImg from "@/assets/hero-lake.jpg";

const topAttractions = [
  { name: "Marari Beach", distance: "14 km Distance", img: g1 },
  { name: "Alleppey Backwaters", distance: "3 km Distance", img: g2 },
  { name: "Alappuzha Lighthouse", distance: "5 km Distance", img: room1 },
  { name: "Vembanad Lake", distance: "1 km Distance", img: heroImg, isWide: true },
];

const allAttractions = [
  "Marari Beach", "Vembanad Lake", "Vijay Beach Park", "Vikasanam Beach",
  "Alleppey Backwaters", "International Coir Museum", "Alleppey Boat House Center",
  "Sahrudaya Hospital", "Ravi Karunakaran Museum", "Alleppey Tourism Development Centre",
  "Mullakkal Temple", "Income Tax Office", "Canal Bazaar", "Commercial Canal",
  "CSI Church", "Houseboat Cruise around", "Alappuzha Lighthouse",
  "Alappuzha Boat House", "Ramavarma District Club", "Sea View Park"
];

export const Location = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="destinations" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Topo Map Background Pattern (subtle) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23112a29\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />

      <div className="container px-4 mx-auto max-w-6xl relative z-10 text-center">
        
        {/* Header */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-dancing text-3xl text-[#4a5568] mb-1"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Top Destination
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-[#112a29] mb-12"
        >
          Our Featured Destination
        </motion.h2>

        {/* Gallery Grid */}
        <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[450px] w-full max-w-5xl mx-auto mb-10">
          
          {/* Narrow Vertical Cards */}
          {topAttractions.filter(a => !a.isWide).map((attr, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="relative flex-1 md:w-32 rounded-3xl overflow-hidden group shadow-lg cursor-pointer transition-all duration-500 hover:flex-[1.5]"
            >
              <img src={attr.img} alt={attr.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Rotated Text Container for Desktop, Normal for Mobile */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-center md:items-start">
                <div className="md:absolute md:bottom-6 md:left-6 md:origin-bottom-left md:-rotate-90 md:translate-y-full flex flex-row items-center gap-2 whitespace-nowrap">
                  <h3 className="text-white font-bold text-xl md:text-2xl tracking-wide">{attr.name}</h3>
                  <span className="text-white/80 text-sm font-medium border-l border-white/40 pl-2 ml-2">{attr.distance}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Wide Card */}
          {topAttractions.filter(a => a.isWide).map((attr, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative flex-[3] rounded-3xl overflow-hidden group shadow-lg cursor-pointer"
            >
              <img src={attr.img} alt={attr.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 text-left">
                <h3 className="text-white font-bold text-3xl mb-1">{attr.name}</h3>
                <span className="text-white/80 text-sm font-medium">{attr.distance}</span>
              </div>
            </motion.div>
          ))}

        </div>

        {/* More Button */}
        <Link 
          to="/destinations"
          className="inline-flex items-center gap-2 bg-[#124b49] hover:bg-[#0c302d] text-white px-8 py-3.5 rounded-full font-medium transition-colors shadow-lg mt-8"
        >
          More <ArrowRight className="w-4 h-4 transition-transform" />
        </Link>

      </div>
    </section>
  );
};

