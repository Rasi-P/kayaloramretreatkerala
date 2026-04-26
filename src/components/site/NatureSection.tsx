import { motion } from "framer-motion";
import { Waves, TreePine, ArrowRight } from "lucide-react";
import g2 from "@/assets/gallery-2.jpg";

export const NatureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 mx-auto max-w-5xl flex flex-col items-center text-center">
        
        {/* Title & Description */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#112a29] mb-4"
        >
          Immerse in Nature at Kayaloram
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mb-12"
        >
          At Kayaloram Resort, every moment is surrounded by pristine nature. From the tranquil river flowing right at our front side to the naturally beautiful and lush outyard, we offer a serene escape that transforms your stay into cherished memories that last a lifetime.
        </motion.p>

        {/* Two Feature Blocks */}
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-16 max-w-4xl mx-auto w-full text-left">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-start gap-4 flex-1"
          >
            <div className="w-12 h-12 rounded-full bg-[#1da855] flex-shrink-0 flex items-center justify-center text-white shadow-md">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#112a29] mb-1">Riverside Views</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Experience the calm and serene river that occurs right at the front side of the resort.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-start gap-4 flex-1"
          >
            <div className="w-12 h-12 rounded-full bg-[#1da855] flex-shrink-0 flex items-center justify-center text-white shadow-md">
              <TreePine className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#112a29] mb-1">Beautiful Outyard</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Relax in our naturally beautiful outyard, surrounded by vibrant greenery and open skies.
              </p>
            </div>
          </motion.div>
          
        </div>

        {/* Large Rounded Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-4xl rounded-[40px] overflow-hidden shadow-xl mb-12 h-[300px] md:h-[500px]"
        >
          <img 
            src={g2} 
            alt="Kayaloram Outyard and River" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Learn More Button */}
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          href="#rooms" 
          className="flex items-center gap-2 bg-[#124b49] hover:bg-[#0c302d] text-white px-8 py-3.5 rounded-full font-medium transition-colors"
        >
          Learn More <ArrowRight className="w-4 h-4 ml-1" />
        </motion.a>

      </div>
    </section>
  );
};
