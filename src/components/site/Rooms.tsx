import { motion } from "framer-motion";
import { Bed, Wifi, Sparkles, Droplets, BellRing, Sofa, ChevronRight, Tv, Briefcase, Zap, Coffee, Newspaper } from "lucide-react";
import room from "@/assets/room-1.jpg";

const features = [
  { icon: Bed, label: "1 Queen Bed" },
  { icon: Sparkles, label: "Housekeeping" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Droplets, label: "Laundry Service" },
  { icon: BellRing, label: "Room Service" },
  { icon: Sofa, label: "Seating Area" },
  { icon: Briefcase, label: "Work Desk" },
  { icon: Zap, label: "Charging Points" },
  { icon: Coffee, label: "Kettle" },
  { icon: Bed, label: "Woollen Blanket" },
  { icon: Tv, label: "TV" },
  { icon: Newspaper, label: "Newspaper" },
];

export const Rooms = () => (
  <section id="rooms" className="bg-gradient-to-b from-background to-muted/30 py-10 md:py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-10"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Choose your stay</p>
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl md:text-5xl font-semibold">
            Room Options <span className="text-muted-foreground font-normal text-xl md:text-2xl">(1)</span>
          </h2>
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-secondary/10 text-secondary font-medium">Free Cancellation</span>
            <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-accent/10 text-accent font-medium">₹0 Payment</span>
          </div>
        </div>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl overflow-hidden bg-card border border-border shadow-elegant hover:shadow-glow transition-shadow duration-700"
      >
        {/* Image */}
        <div className="relative h-56 md:h-72 lg:h-auto lg:aspect-[4/3] overflow-hidden group">
          <img
            src={room}
            alt="102 Cinemon room with queen bed and lake view"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            width={1280}
            height={896}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/0 to-transparent" />
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/90 text-xs font-medium">
            6 photos
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_280px]">
          {/* Details */}
          <div className="p-5 md:p-8 border-b lg:border-b-0 lg:border-r border-border">
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">102 Cinemon</h3>
            <p className="text-sm text-accent font-medium mb-4">Lake View · Sleeps 2</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2 py-1.5">
                  <f.icon className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-xs md:text-sm text-muted-foreground">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1 text-sm border-t border-border pt-4">
              <p className="text-secondary font-medium">✓ Free Cancellation before 05 May 01:59 PM</p>
              <p className="text-muted-foreground">Mineral water — additional charge</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-5 md:p-8 bg-muted/40 flex flex-col justify-center gap-4">
            <div>
              <p className="font-display text-xl md:text-2xl font-semibold">Contact to Book</p>
              <p className="text-sm text-muted-foreground mt-1">Get the best rates by reaching out to us directly.</p>
            </div>
            <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#128C7E] transition-all shadow-soft group">
              WhatsApp Us
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+911234567890" className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all shadow-soft">
              Call Us
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  </section>
);
