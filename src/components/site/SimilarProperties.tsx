import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import room from "@/assets/room-1.jpg";

const properties = [
  { img: room, name: "Kayaloram 102 Cinemon", price: "4,085", tag: "Free Cancellation" },
  { img: g1, name: "Backwater Bliss Houseboat", price: "5,450", tag: "Free Breakfast" },
  { img: g2, name: "Lakeside Deck Villa", price: "6,200", tag: "Lake View" },
  { img: g3, name: "Coconut Grove Homestay", price: "3,890", tag: "Couple Friendly" },
];

export const SimilarProperties = () => (
  <section id="similar" className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Explore more</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Similar Properties</h2>
        </div>
        <button className="hidden md:inline-block text-sm font-medium text-accent hover:underline">View All →</button>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {properties.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group rounded-3xl overflow-hidden bg-card border border-border hover-lift"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <button className="absolute top-3 right-3 h-9 w-9 rounded-full bg-background/95 backdrop-blur grid place-items-center hover:bg-accent hover:text-accent-foreground transition-colors">
                <Heart className="h-4 w-4" />
              </button>
              <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-background/95 text-[11px] font-semibold">
                {p.tag}
              </span>
            </div>
            <div className="p-4">
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Homestay · Alleppey</p>
              <h3 className="font-display text-lg font-semibold mt-1 mb-3 line-clamp-1">{p.name}</h3>
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-xl font-semibold">₹{p.price}</p>
                  <p className="text-[10px] text-muted-foreground">+ taxes / night</p>
                </div>
                <button className="text-xs font-semibold text-accent hover:underline">Select →</button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
