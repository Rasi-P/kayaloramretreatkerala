import { motion } from "framer-motion";
import { Clock, Users, IdCard, Ban } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Rules = () => (
  <section id="rules" className="container py-16 md:py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Property Rules</p>
      <h2 className="font-display text-3xl md:text-5xl font-semibold">House rules at <em className="text-accent not-italic">Kayaloram</em></h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-4 mb-8">
      {[
        { icon: Clock, label: "Check-in", value: "2:00 PM – 10:00 PM" },
        { icon: Clock, label: "Check-out", value: "12:00 PM" },
      ].map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 p-6 rounded-3xl gradient-mist border border-border"
        >
          <div className="h-14 w-14 rounded-2xl bg-card grid place-items-center text-accent shadow-soft">
            <c.icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{c.label}</p>
            <p className="font-display text-2xl font-semibold">{c.value}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <Accordion type="single" collapsible className="rounded-3xl bg-card border border-border overflow-hidden">
      <AccordionItem value="couples" className="border-b border-border/60 px-6">
        <AccordionTrigger className="hover:no-underline py-5">
          <span className="flex items-center gap-3 font-semibold text-left">
            <Users className="h-5 w-5 text-accent" /> Couple / Bachelor Rules
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground space-y-2 pb-5">
          <p>✓ Unmarried couples are welcome. Local IDs accepted.</p>
          <p>✓ Primary guest must be at least 18 years old.</p>
          <p>✓ Groups with only male guests are allowed.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="id" className="border-b border-border/60 px-6">
        <AccordionTrigger className="hover:no-underline py-5">
          <span className="flex items-center gap-3 font-semibold text-left">
            <IdCard className="h-5 w-5 text-accent" /> Accepted ID Proofs
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground pb-5">
          Passport, Aadhaar, Driving Licence and other Government-issued IDs are accepted.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="must" className="px-6">
        <AccordionTrigger className="hover:no-underline py-5">
          <span className="flex items-center gap-3 font-semibold text-left">
            <Ban className="h-5 w-5 text-accent" /> Must-Read
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground space-y-2 pb-5">
          <p>✗ Pets are not allowed.</p>
          <p>✓ Quiet hours after 10 PM, please respect the lake.</p>
          <p>✓ Contact the property for any special requests after booking.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
);
