import { motion } from "framer-motion";
import { Camera, MapPin, Star, Bed, Users } from "lucide-react";
import heroImg from "@/assets/hero-lake.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import room from "@/assets/room-1.jpg";

export const HeroGallery = () => {
  return (
    <section className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6"
      >
        {/* Title block */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium">
              Private Room · Homestay
            </span>
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
              Lake View
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
              <Star className="h-3 w-3 fill-current" /> New
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-balance max-w-4xl">
            Kayaloram Retreat Kerala
            <span className="block text-accent italic font-medium">102 Cinemon · Homeyhuts</span>
          </h1>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-accent" /> Alappuzha, Kerala · 35.5 km from city centre</span>
            <span className="inline-flex items-center gap-1.5"><Bed className="h-4 w-4 text-accent" /> 1 Queen Bed</span>
            <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-accent" /> Sleeps 2 (+1 extra)</span>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-4 grid-rows-2 gap-2 md:gap-3 h-[60vh] md:h-[72vh] rounded-3xl overflow-hidden relative shadow-elegant">
          <motion.div
            className="col-span-4 md:col-span-2 row-span-2 relative overflow-hidden group"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={heroImg}
              alt="Kerala backwater homestay at golden hour"
              className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
              width={1920}
              height={1080}
            />
            <div className="absolute inset-0 gradient-hero opacity-70" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <p className="font-display text-2xl md:text-3xl italic">Where the lake meets the palms.</p>
            </div>
          </motion.div>

          {[g1, room, g2, g3].map((img, i) => (
            <motion.div
              key={i}
              className={`hidden md:block relative overflow-hidden group ${i === 3 ? "" : ""}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={img}
                alt={`Property view ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={1280}
                height={896}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
            </motion.div>
          ))}

          {/* View all photos button */}
          <button className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-background/95 backdrop-blur text-foreground text-sm font-medium shadow-elegant hover:bg-background transition-all hover:scale-105">
            <Camera className="h-4 w-4" />
            View all 34 photos
          </button>

          {/* Mobile preview strip */}
          <div className="md:hidden absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto scrollbar-hide">
            {[g1, room, g2, g3, g4].map((img, i) => (
              <img key={i} src={img} alt="" className="h-14 w-20 rounded-lg object-cover flex-shrink-0 ring-2 ring-background/80" loading="lazy" />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
