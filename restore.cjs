const fs = require('fs');
let c = fs.readFileSync('src/components/site/Overview.tsx', 'utf8');

const regex = /<div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">[\s\S]*?<p className="text-sm font-medium italic text-accent">/;

const replacement = `<div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl">
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
            <p className="text-sm font-medium italic text-accent">`;

c = c.replace(regex, replacement);

c = c.replace(
  /<div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-3 pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">/,
  '<div className="flex md:grid overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory md:snap-none gap-3 pb-2 md:pb-0 md:grid-cols-3 lg:grid-cols-4 -mx-4 px-4 md:mx-0 md:px-0">'
);

c = c.replace(
  /className="group flex flex-col items-center justify-center gap-2 p-4 rounded-3xl bg-card border border-border\/60 hover:border-accent\/40 hover-lift cursor-default min-w-\[100px\] snap-center flex-shrink-0 text-center"/g,
  'className="group flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-3 p-4 rounded-3xl md:rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover-lift cursor-default min-w-[100px] md:min-w-0 snap-center md:snap-none flex-shrink-0 md:flex-shrink text-center md:text-left"'
);

c = c.replace(
  /<div className="h-12 w-12 rounded-2xl/g,
  '<div className="h-12 w-12 md:h-10 md:w-10 rounded-2xl md:rounded-xl'
);

c = c.replace(
  /<span className="text-\[11px\] font-medium leading-tight">{a.label}<\/span>/g,
  '<span className="text-[11px] md:text-sm font-medium leading-tight md:leading-normal">{a.label}</span>'
);

fs.writeFileSync('src/components/site/Overview.tsx', c);
