import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-lake.jpg";
import room1 from "@/assets/room-1.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";

// Duplicate images to create a full grid for the gallery
const galleryItems = [
  { src: heroImg, alt: "Resort Exterior" },
  { src: room1, alt: "Luxury Room" },
  { src: g1, alt: "Beautiful Landscape" },
  { src: g2, alt: "Swimming Pool" },
  { src: room1, alt: "Indoor Comfort" },
  { src: heroImg, alt: "Backwater Views" },
  { src: g2, alt: "Evening Glow" },
  { src: g1, alt: "Tropical Greenery" },
  { src: heroImg, alt: "Lakeside Relaxation" },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center mt-[70px]">
        <img src={heroImg} alt="Gallery Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider mb-4">
            Our Gallery
          </h1>
          <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>→</span>
            <span className="text-white">Our Gallery</span>
          </div>
        </div>
      </div>

      <main className="flex-1 w-full pb-24">
        {/* Intro Section */}
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-dancing text-3xl text-[#4a5568] mb-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Explore Us
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-[#112a29] mb-6"
          >
            A truly exceptional experience
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;
