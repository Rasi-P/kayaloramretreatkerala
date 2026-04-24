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
  { icon: Bath, label: "Hot Water & Geyser" },
  { icon: Coffee, label: "Electric Kettle" },
  { icon: Tv, label: "LED Television" },
  { icon: BellRing, label: "Room Service" },
  { icon: Car, label: "Parking" },
  { icon: Sparkles, label: "Washing Machine" },
  { icon: Droplets, label: "Laundry Service" },
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
          <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <strong className="text-foreground block mb-1">Indoor Spaces</strong>
              <p>Step inside to discover airy, light-filled spaces designed for comfort and connection. Bedroom 102 Cinemon is located on the ground floor and features a queen-size bed, lake view, en-suite bathroom, AC, wardrobe, work desk, and electric kettle. The expansive lawn area features a rain dance shower setup with music and lights—perfect for celebrations and group fun.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <strong className="text-foreground block mb-1">Unveiling the Homestay Spacious Living Experience</strong>
              <p>Instead of enclosed walls, life here flows outdoors. Relax in the open lawn area, enjoy board games like carrom, or unwind with soft music under the open sky.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <strong className="text-foreground block mb-1">Modern Kitchen & Dining</strong>
              <p>The kitchen is equipped for light cooking and heating. Complimentary drinking water (1L per room) is provided; additional water is available at ₹20 per liter.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <strong className="text-foreground block mb-1">Comfortable Bedrooms & Bathrooms</strong>
              <p>The bedroom accommodates couples and 2 extra guests comfortably. The attached bathroom features modern fittings, geyser, shower, sink with mirror, exhaust fan, bath towels, and basic toiletries.</p>
            </motion.div>
            <p className="text-sm font-medium italic text-accent">
              A caretaker is available at the property to assist guests for a comfortable stay and manage day-to-day upkeep.
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
        <span className="text-sm text-muted-foreground line-through">₹4,139</span>
        <span className="font-display text-3xl font-semibold text-foreground">₹3,358</span>
        <span className="text-xs text-muted-foreground">/ night</span>
      </div>
      <p className="text-xs text-muted-foreground">+ ₹414 taxes & fees</p>

      <div className="rounded-xl bg-secondary/10 border border-secondary/20 p-3 text-xs">
        <p className="font-semibold text-secondary mb-0.5">Deal Applied: WELCOMETRIP</p>
        <p className="text-muted-foreground">Great Discounts for You. Get INR781 Off</p>
      </div>

      <ul className="space-y-2 text-sm">
        <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Free Cancellation before 05 May 01:59 PM</li>
        <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-secondary" /> Book with ₹0 Payment</li>
        <li className="flex items-center gap-2 text-muted-foreground text-xs"><span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" /> Pay before 04 May, 11:59 PM IST</li>
      </ul>

      <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center h-12 rounded-2xl bg-[#25D366] text-white font-semibold hover:bg-[#128C7E] transition-all shadow-soft hover:shadow-glow translate-y-0 hover:-translate-y-0.5">
        WhatsApp Us
      </a>
      <p className="text-center text-xs text-muted-foreground">Contact us directly to unlock the best deals and offers</p>
    </div>
  </motion.div>
);
