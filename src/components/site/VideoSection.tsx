import { Play } from "lucide-react";
import heroImg from "@/assets/hero-lake.jpg"; // Using hero image as video thumbnail placeholder

export const VideoSection = () => (
  <section className="bg-white pb-10">
    <div className="bg-[#0f8a84] py-16 px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-display">Enjoy Your Stay!</h2>
      <p className="text-white/80 max-w-xl mx-auto">
        Unwind in the lap of luxury. Your perfect getaway begins here, where comfort meets nature's tranquility.
      </p>
    </div>

    <div className="container px-4 mt-12 text-center max-w-4xl mx-auto">
      <p className="text-[#0f8a84] font-semibold text-sm uppercase tracking-widest mb-2">-- Video / Gallery --</p>
      <h2 className="text-2xl md:text-4xl font-bold text-[#112a29] mb-8">
        Check out our retreat in action
      </h2>

      <div className="relative rounded-3xl overflow-hidden shadow-lg h-48 md:h-[400px]">
        <img src={heroImg} alt="Retreat Video" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <button className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors">
            <Play className="w-6 h-6 ml-1" fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  </section>
);
