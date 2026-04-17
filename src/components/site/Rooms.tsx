import { motion } from "framer-motion";
import { Bed, Wifi, Sparkles, Droplets, BellRing, Sofa, ChevronRight } from "lucide-react";
import room from "@/assets/room-1.jpg";

const features = [
  { icon: Bed, label: "1 Queen Bed" },
  { icon: Sparkles, label: "Housekeeping" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Droplets, label: "Laundry Service" },
  { icon: BellRing, label: "Room Service" },
  { icon: Sofa, label: "Seating Area" },
];

export const Rooms = () => (
  <section id="rooms" className="bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Choose your stay</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold">Room Options <span className="text-muted-foreground font-normal text-2xl">(1)</span></h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm">
          <span className="px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium">Free Cancellation</span>
          <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium">₹0 Payment</span>
        </div>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid lg:grid-cols-[420px_1fr_280px] gap-0 rounded-3xl overflow-hidden bg-card border border-border shadow-elegant hover:shadow-glow transition-shadow duration-700"
      >
        {/* Image */}
        <div className="relative h-64 lg:h-auto overflow-hidden group">
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

        {/* Details */}
        <div className="p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-border">
          <h3 className="font-display text-2xl font-semibold mb-1">102 Cinemon</h3>
          <p className="text-sm text-accent font-medium mb-4">Lake View · Sleeps 2</p>

          <div className="grid grid-cols-2 gap-2 mb-5">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <f.icon className="h-4 w-4 text-secondary flex-shrink-0" />
                {f.label}
              </div>
            ))}
          </div>

          <div className="space-y-1 text-sm border-t border-border pt-4">
            <p className="text-secondary font-medium">✓ Free Cancellation before 03 May 01:59 PM</p>
            <p className="text-muted-foreground">Mineral water — additional charge</p>
          </div>
        </div>

        {/* Price */}
        <div className="p-6 lg:p-8 bg-muted/40 border-t lg:border-t-0 lg:border-l border-border flex flex-col justify-center">
          <div>
            <p className="text-xs text-muted-foreground line-through">₹4,966</p>
            <p className="font-display text-3xl font-semibold">₹4,085</p>
            <p className="text-xs text-muted-foreground mb-1">+ ₹596 taxes / night</p>
            <p className="text-xs text-secondary font-medium mb-4">Book with ₹0</p>
          </div>
          <button className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-soft group">
            Check Availability
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-center text-[10px] text-muted-foreground mt-2">Login to get this for ₹4,036 or less</p>
        </div>
      </motion.article>

      {/* Flexi dates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 rounded-3xl bg-card border border-border p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
          <div>
            <h3 className="font-display text-xl font-semibold">Are you flexible with travel dates?</h3>
            <p className="text-sm text-muted-foreground">Find alternate prices with flexi dates.</p>
          </div>
          <button className="text-sm font-medium text-accent hover:underline self-start">Modify Dates →</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { d: "Fri, 01 May", price: "₹4,966", note: "Expensive by ₹881" },
            { d: "Sun, 10 May", price: "₹4,085", note: "Cheapest", best: true },
            { d: "Tue, 12 May", price: "₹4,139", note: "" },
            { d: "Fri, 22 May", price: "₹4,966", note: "Expensive by ₹881" },
          ].map((item) => (
            <div
              key={item.d}
              className={`p-4 rounded-2xl border transition-all hover-lift cursor-pointer ${
                item.best
                  ? "bg-secondary/10 border-secondary/40 ring-2 ring-secondary/20"
                  : "bg-muted/40 border-border hover:border-accent/30"
              }`}
            >
              <p className="text-xs text-muted-foreground">{item.d}</p>
              <p className="font-display text-lg font-semibold mt-1">{item.price}</p>
              <p className={`text-[11px] mt-1 ${item.best ? "text-secondary font-semibold" : "text-muted-foreground"}`}>
                {item.note || "—"}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
