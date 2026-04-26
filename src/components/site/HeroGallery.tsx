import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-lake.jpg";
import room1 from "@/assets/room-1.jpg";
import g1 from "@/assets/gallery-1.jpg";

const images = [heroImg, room1, g1];

export const HeroGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      {/* Background Images with Fixed positioning for parallax effect */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center bg-fixed ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 tracking-wide drop-shadow-lg"
        >
          KAYALORAM RESORT
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/90 tracking-widest uppercase drop-shadow-md"
        >
          A PIECE OF PARADISE
        </motion.p>
      </div>

      {/* Floating WhatsApp Button (Bottom Left) matching reference */}
      <div className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-50">
        <a 
          href="https://wa.me/911234567890" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 bg-[#21c063] hover:bg-[#1da855] text-white px-5 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
        >
          <div className="bg-white/20 p-1 rounded-full">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          Chat For more
        </a>
      </div>
    </section>
  );
};


