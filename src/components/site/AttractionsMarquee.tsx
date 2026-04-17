const attractions = [
  "Marari Beach", "Vembanad Lake", "Vijay Beach Park", "Vikasanam Beach",
  "Alleppey Backwaters", "Alleppey Boat House Center", "International Coir Museum",
  "Ravi Karunakaran Museum", "Mullakkal Temple", "Canal Bazaar", "Houseboat Cruise",
  "Alappuzha Lighthouse", "Sea View Park", "Ramavarma District Club",
];

export const AttractionsMarquee = () => (
  <section className="py-12 border-y border-border bg-muted/30 overflow-hidden">
    <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
      Popular attractions nearby
    </p>
    <div className="relative">
      <div className="flex gap-3 animate-marquee w-max">
        {[...attractions, ...attractions].map((a, i) => (
          <span
            key={i}
            className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium whitespace-nowrap hover:border-accent/40 hover:text-accent transition-colors"
          >
            ✦ {a}
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
    </div>
  </section>
);
