import { motion } from "framer-motion";
import { BedDouble, Users, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-lake.jpg";
import room1 from "@/assets/room-1.jpg";
import g1 from "@/assets/gallery-1.jpg";

export const Overview = () => (
  <section id="about-us" className="w-full py-16 md:py-24 bg-[#eefaf8] relative overflow-hidden">
    {/* Subtle Background Pattern (Optional, using CSS pattern) */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f3c3a_1px,transparent_1px)] [background-size:20px_20px]" />

    <div className="container px-4 mx-auto max-w-7xl relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Image Mosaic */}
        <div className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
          {/* Tall Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full relative overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-xl rounded-bl-xl shadow-lg"
          >
            <img src={heroImg} alt="Kayaloram Exterior" className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Two Stacked Right Images */}
          <div className="flex flex-col gap-4 h-full">
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative overflow-hidden rounded-tl-[60px] rounded-br-[60px] rounded-tr-xl rounded-bl-xl shadow-lg"
            >
              <img src={room1} alt="Kayaloram Room" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1 relative overflow-hidden rounded-tl-[60px] rounded-br-[60px] rounded-tr-xl rounded-bl-xl shadow-lg"
            >
              <img src={g1} alt="Kayaloram Pool" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Right Side: Text & Features */}
        <div className="flex flex-col items-start text-left">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-dancing text-3xl text-[#4a5568] mb-1"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Let's Go Together
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#112a29] mb-6"
          >
            Welcome to Kayaloram
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-sm md:text-base leading-relaxed mb-10"
          >
            Discover the essence of tranquility at Kayaloram Retreat Kerala,
            ideally situated on the banks of the backwaters. Embraced by the
            serenity of nature, our resort offers a sanctuary for those seeking an
            escape from the hustle and bustle of city life. Immerse yourself in
            the lush greenery that envelops our resort, creating an eco-friendly
            haven for all our guests to enjoy.
          </motion.p>

          <div className="flex flex-col gap-8 w-full mb-10">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-[#1da855] flex-shrink-0 flex items-center justify-center text-white shadow-md">
                <BedDouble className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#112a29] mb-1">Rooms & Resort</h3>
                <p className="text-gray-500 text-sm">Relaxing Rooms & Luxury Resort for Your Perfect Getaway.</p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-5"
            >
              <div className="w-14 h-14 rounded-full bg-[#1da855] flex-shrink-0 flex items-center justify-center text-white shadow-md">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#112a29] mb-1">Best Staffs</h3>
                <p className="text-gray-500 text-sm">Caring Staff, Memorable Moments, People Who Perfect Your Stay.</p>
              </div>
            </motion.div>
          </div>

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
      </div>
    </div>
  </section>
);


