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
  <section id="location" className="bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Location</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold">A quiet corner of <em className="text-accent not-italic">Alappuzha</em>.</h2>
        <p className="text-muted-foreground mt-2 inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4 text-accent" /> 688532, Alappuzha · 35.5 km from city centre
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative h-[420px] rounded-3xl overflow-hidden shadow-elegant border border-border group cursor-pointer"
      >
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=76.2,9.4,76.5,9.7&layer=mapnik&marker=9.5,76.35"
          className="w-full h-full border-0"
          loading="lazy"
          title="Property location map"
        />
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-primary/5" />
        <button className="absolute top-4 right-4 px-4 py-2 rounded-full bg-background/95 backdrop-blur text-sm font-medium shadow-soft hover:scale-105 transition-transform">
          Click to View Full Map
        </button>
      </motion.div>

      {/* Attractions */}
      <div className="mt-12">
        <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6">Top Attractions Nearby</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {attractions.map((a, i) => (
            <motion.a
              key={a.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-72 rounded-3xl overflow-hidden block shadow-soft hover:shadow-elegant transition-all"
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
              <div className="absolute bottom-5 left-5 right-5 text-primary-foreground">
                <p className="font-display text-xl font-semibold">{a.name}</p>
                <p className="text-sm opacity-90 inline-flex items-center gap-1 mt-1">
                  <Navigation className="h-3 w-3" /> {a.distance}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Transport */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="rounded-2xl bg-card border border-border p-5 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl gradient-mist grid place-items-center text-primary"><Train className="h-5 w-5" /></div>
          <div>
            <p className="font-semibold">Turavur Railway Station</p>
            <p className="text-sm text-muted-foreground">4.9 km away</p>
          </div>
        </div>
        <div className="rounded-2xl bg-card border border-border p-5 flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl gradient-mist grid place-items-center text-primary"><Plane className="h-5 w-5" /></div>
          <div>
            <p className="font-semibold">Domestic Airport Kochi</p>
            <p className="text-sm text-muted-foreground">48.8 km away</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
