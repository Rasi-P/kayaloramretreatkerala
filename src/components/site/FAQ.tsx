import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How far is Kayaloram Retreat from the city centre?",
    a: "It's located 35.5 km from Alleppey city centre — close enough for excursions, far enough for true backwater quiet.",
  },
  {
    q: "How many room types are available?",
    a: "We offer 1 carefully designed room type — the Lake View 102 Cinemon — to make every stay feel personal.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in: 2:00 PM. Check-out: 12:00 PM. Early check-ins and late check-outs are subject to availability.",
  },
  {
    q: "What attractions are nearby?",
    a: "Vembanad Lake, Kumbalangi village, Marari Beach, Mararikkulam Railway Station, Thuravoor Temple and the Alleppey houseboat point are all within easy reach.",
  },
  {
    q: "What are the customer ratings?",
    a: "We're a brand-new listing — ratings will appear here as soon as our first guests share their stories.",
  },
];

export const FAQ = () => (
  <section className="container py-16 md:py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-10 max-w-3xl"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Questions & Answers</p>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-balance">
        Everything you might want to know before you book.
      </h2>
    </motion.div>

    <Accordion type="single" collapsible className="space-y-3">
      {faqs.map((f, i) => (
        <motion.div
          key={f.q}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <AccordionItem
            value={`q-${i}`}
            className="rounded-2xl bg-card border border-border px-6 data-[state=open]:border-accent/40 data-[state=open]:shadow-soft transition-all"
          >
            <AccordionTrigger className="hover:no-underline py-5 text-left font-display text-lg font-semibold">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  </section>
);
