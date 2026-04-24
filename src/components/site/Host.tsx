import { motion } from "framer-motion";
import { Star, MessageCircle, Clock, Globe } from "lucide-react";

export const Host = () => (
  <section className="container py-10 md:py-24">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-card border border-border p-5 md:p-10 shadow-soft"
    >
      {/* Mobile: horizontal host info row */}
      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border lg:hidden">
        <div className="relative flex-shrink-0">
          <div className="h-20 w-20 rounded-full gradient-sunset grid place-items-center text-primary-foreground font-display text-3xl font-semibold shadow-elegant">
            Y
          </div>
          <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-secondary grid place-items-center text-secondary-foreground border-4 border-background">
            <Star className="h-3 w-3 fill-current" />
          </div>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold">Hosted by Yash</h3>
          <p className="text-sm text-muted-foreground">Hosting since 2025</p>
          <div className="flex gap-3 mt-1.5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Globe className="h-3 w-3" /> English · Hindi</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> Replies in 6 hrs</span>
          </div>
        </div>
      </div>

      {/* Desktop: side-by-side */}
      <div className="hidden lg:grid lg:grid-cols-[260px_1fr] gap-8 items-start">
        <div className="flex flex-col items-center text-center border-r border-border pr-8">
          <div className="relative mb-4">
            <div className="h-28 w-28 rounded-full gradient-sunset grid place-items-center text-primary-foreground font-display text-4xl font-semibold shadow-elegant">
              Y
            </div>
            <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-secondary grid place-items-center text-secondary-foreground border-4 border-background">
              <Star className="h-3.5 w-3.5 fill-current" />
            </div>
          </div>
          <h3 className="font-display text-2xl font-semibold">Hosted by Yash</h3>
          <p className="text-sm text-muted-foreground mt-1">Hosting since 2025</p>
          <div className="flex flex-col gap-1.5 mt-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center justify-center gap-1.5"><Globe className="h-3 w-3" /> English · Hindi</span>
            <span className="inline-flex items-center justify-center gap-1.5"><Clock className="h-3 w-3" /> Replies within 6 hrs</span>
          </div>
        </div>
        <HostContent />
      </div>

      {/* Mobile: content below */}
      <div className="lg:hidden">
        <HostContent />
      </div>
    </motion.div>
  </section>
);

const HostContent = () => (
  <div>
    <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Meet your host</p>
    <h2 className="font-display text-xl md:text-3xl font-semibold mb-4 text-balance">
      Carefully curated stays from a passionate Indian travel startup.
    </h2>
    <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
      Homeyhuts is an innovative Indian tech startup dedicated to empowering the homestay and travel industry.
      We provide guests with thoughtfully curated vacation rentals designed to meet every need. Each accommodation
      is fully furnished, and our on-site housekeeping team ensures your comfort and care.
    </p>
    <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/20 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all text-sm font-medium">
      <MessageCircle className="h-4 w-4" />
      Message Host on WhatsApp
    </a>
  </div>
);
