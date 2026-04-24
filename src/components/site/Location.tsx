import { motion } from "framer-motion";
import { MapPin, Navigation, Train, Plane } from "lucide-react";
import lake from "@/assets/attraction-lake.jpg";
import beach from "@/assets/attraction-beach.jpg";
import village from "@/assets/attraction-village.jpg";

const attractions = [
  { name: "Vembanad Lake", distance: "9.2 km", img: lake },
  { name: "Kumbalangi", distance: "11.8 km", img: village },
  { name: "Marari Beach", distance: "14.5 km", img: beach },
];

export const Location = () => (
  <section id="location" className="bg-gradient-to-b from-muted/30 to-background py-10 md:py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-10"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Location</p>
        <h2 className="font-display text-2xl md:text-5xl font-semibold">A quiet corner of <em className="text-accent not-italic">Alappuzha</em>.</h2>
        <p className="text-muted-foreground mt-2 inline-flex items-center gap-1.5 text-sm">
          <MapPin className="h-4 w-4 text-accent flex-shrink-0" /> 688532, Alappuzha · 35.5 km from city centre
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative h-[220px] md:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden shadow-elegant border border-border group cursor-pointer"
      >
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=76.2,9.4,76.5,9.7&layer=mapnik&marker=9.5,76.35"
          className="w-full h-full border-0"
          loading="lazy"
          title="Property location map"
        />
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-primary/5" />
        <button className="absolute top-3 right-3 md:top-4 md:right-4 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-background/95 backdrop-blur text-xs md:text-sm font-medium shadow-soft hover:scale-105 transition-transform">
          View Full Map
        </button>
      </motion.div>

      {/* Attractions */}
      <div className="mt-10 md:mt-12">
        <h3 className="font-display text-xl md:text-3xl font-semibold mb-5 md:mb-6">Top Attractions Nearby</h3>

        {/* Mobile: auto-scroll marquee + manual scroll */}
        <div className="sm:hidden overflow-hidden relative -mx-4">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 animate-marquee w-max px-4">
              {[...attractions, ...attractions].map((a, i) => (
                <a
                  key={i}
                  href="#"
                  className="group relative h-52 w-64 flex-shrink-0 rounded-2xl overflow-hidden block shadow-soft"
                >
                  <img
                    src={a.img}
                    alt={a.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    width={1024}
                    height={768}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                    <p className="font-display text-lg font-semibold">{a.name}</p>
                    <p className="text-sm opacity-90 inline-flex items-center gap-1 mt-0.5">
                      <Navigation className="h-3 w-3" /> {a.distance}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-4 md:gap-5">
          {attractions.map((a, i) => (
            <motion.a
              key={a.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-64 md:h-72 rounded-3xl overflow-hidden block shadow-soft hover:shadow-elegant transition-all"
            >
              <img
                src={a.img}
                alt={a.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                width={1024}
                height={768}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                <p className="font-display text-xl font-semibold">{a.name}</p>
                <p className="text-sm opacity-90 inline-flex items-center gap-1 mt-0.5">
                  <Navigation className="h-3 w-3" /> {a.distance}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Transport */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
        <div className="rounded-2xl bg-card border border-border p-4 md:p-5 flex items-center gap-4">
          <div className="h-11 w-11 md:h-12 md:w-12 rounded-xl gradient-mist grid place-items-center text-primary flex-shrink-0"><Train className="h-5 w-5" /></div>
          <div>
            <p className="font-semibold text-sm md:text-base">Turavur Railway Station</p>
            <p className="text-xs md:text-sm text-muted-foreground">4.9 km away</p>
          </div>
        </div>
        <div className="rounded-2xl bg-card border border-border p-4 md:p-5 flex items-center gap-4">
          <div className="h-11 w-11 md:h-12 md:w-12 rounded-xl gradient-mist grid place-items-center text-primary flex-shrink-0"><Plane className="h-5 w-5" /></div>
          <div>
            <p className="font-semibold text-sm md:text-base">Domestic Airport Kochi</p>
            <p className="text-xs md:text-sm text-muted-foreground">48.8 km away</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
