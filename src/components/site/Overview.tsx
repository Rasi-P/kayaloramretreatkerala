import { motion, type Variants } from "framer-motion";
import {
  Wifi, Coffee, Wind, Tv, Bath, Car, Shield, KeySquare,
  UtensilsCrossed, Sparkles, Droplets, BellRing,
} from "lucide-react";

const amenities = [
  { icon: KeySquare, label: "Caretaker & Key" },
  { icon: UtensilsCrossed, label: "Kitchenette" },
  { icon: Shield, label: "Power Backup" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Bath, label: "Hot Water" },
  { icon: Coffee, label: "Tea / Coffee" },
  { icon: Tv, label: "Television" },
  { icon: Sparkles, label: "Housekeeping" },
  { icon: Droplets, label: "Laundry Service" },
  { icon: Car, label: "Free Parking" },
  { icon: BellRing, label: "Room Service" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export const Overview = () => (
  <section id="overview" className="container py-16 md:py-24">
    <div className="grid lg:grid-cols-[1fr_420px] gap-12">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">About the property</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6 text-balance">
            Airy, light-filled spaces designed for <em className="text-accent not-italic">comfort and connection</em>.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
            <p>
              Step inside Bedroom <strong className="text-foreground">102 Cinemon</strong>, a private retreat tucked into the
              palm-lined banks of the Vembanad backwaters. Wake to mist drifting over still water, brew your morning
              coffee in your own kitchenette, and watch traditional snake-boats glide by from the lakefront deck.
            </p>
            <p>
              The room features a plush queen bed, woven bamboo blinds, terracotta-tile floors and a private balcony
              that frames the lake like a living painting. Our on-site caretaker is always close by — never intrusive,
              always helpful.
            </p>
          </div>
        </motion.div>

        {/* Amenities grid */}
        <div className="mt-12">
          <div className="flex items-end justify-between mb-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold">Amenities</h3>
            <button className="text-sm font-medium text-accent hover:underline">View All →</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {amenities.map((a, i) => (
              <motion.div
                key={a.label}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="group flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover-lift cursor-default"
              >
                <div className="h-10 w-10 rounded-xl gradient-mist grid place-items-center text-primary group-hover:gradient-sunset group-hover:text-accent-foreground transition-all duration-500">
                  <a.icon className="h-4 w-4" />
                </div>
                <span className="text-sm font-medium">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky booking card desktop */}
      <aside className="hidden lg:block">
        <div className="sticky top-28">
          <BookingCard />
        </div>
      </aside>
    </div>

    {/* Mobile booking card */}
    <div className="lg:hidden mt-10">
      <BookingCard />
    </div>
  </section>
);

const BookingCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="rounded-3xl bg-card border border-border shadow-elegant overflow-hidden"
  >
    <div className="gradient-lake p-5 text-primary-foreground">
      <p className="text-xs uppercase tracking-widest opacity-80">102 Cinemon · Lake View</p>
      <p className="font-display text-lg font-medium mt-1">Fits 2 Adults</p>
    </div>
    <div className="p-5 space-y-4">
      <div className="flex items-baseline gap-2">
        <span className="text-sm text-muted-foreground line-through">₹4,966</span>
        <span className="font-display text-3xl font-semibold text-foreground">₹4,085</span>
        <span className="text-xs text-muted-foreground">/ night</span>
      </div>
      <p className="text-xs text-muted-foreground">+ ₹596 taxes & fees</p>

      <div className="rounded-xl bg-secondary/10 border border-secondary/20 p-3 text-xs">
        <p className="font-semibold text-secondary mb-0.5">Deal Applied: WELCOMETRIP</p>
        <p className="text-muted-foreground">Get ₹881 off your stay</p>
      </div>

      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Free Cancellation before 03 May</li>
        <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Book with ₹0 Payment</li>
        <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Login to save extra ₹49</li>
      </ul>

      <button className="w-full h-12 rounded-2xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all hover:shadow-glow">
        Check Availability
      </button>
      <p className="text-center text-xs text-muted-foreground">Add dates to confirm price</p>
    </div>
  </motion.div>
);
