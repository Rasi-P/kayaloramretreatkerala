import { motion } from "framer-motion";
import { Clock, Users, IdCard, Ban } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Rules = () => (
  <section id="rules" className="container py-10 md:py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8 md:mb-10"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Property Rules</p>
      <h2 className="font-display text-2xl md:text-5xl font-semibold">House rules at <em className="text-accent not-italic">Kayaloram</em></h2>
    </motion.div>

    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
      {[
        { icon: Clock, label: "Check-in", value: "2:00 PM" },
        { icon: Clock, label: "Check-out", value: "11:00 AM" },
      ].map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-2 p-4 md:p-6 rounded-2xl md:rounded-3xl gradient-mist border border-border"
        >
          <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-card grid place-items-center text-accent shadow-soft">
            <c.icon className="h-5 w-5 md:h-6 md:w-6" />
          </div>
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground font-medium">{c.label}</p>
            <p className="font-display text-lg md:text-2xl font-semibold">{c.value}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <Accordion type="single" collapsible className="rounded-2xl md:rounded-3xl bg-card border border-border overflow-hidden">
      <AccordionItem value="couples" className="border-b border-border/60 px-4 md:px-6">
        <AccordionTrigger className="hover:no-underline py-4 md:py-5">
          <span className="flex items-center gap-3 font-semibold text-left text-sm md:text-base">
            <Users className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" /> Couple / Bachelor Rules
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground space-y-2 pb-4 md:pb-5 text-sm">
          <p>✓ Unmarried couples are welcome. Local IDs accepted.</p>
          <p>✓ Primary guest must be at least 18 years old.</p>
          <p>✓ Groups with only male guests are allowed.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="id" className="border-b border-border/60 px-4 md:px-6">
        <AccordionTrigger className="hover:no-underline py-4 md:py-5">
          <span className="flex items-center gap-3 font-semibold text-left text-sm md:text-base">
            <IdCard className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" /> Accepted ID Proofs
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground pb-4 md:pb-5 text-sm">
          Passport, Aadhaar, Driving Licence and other Government-issued IDs are accepted.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="must" className="px-4 md:px-6">
        <AccordionTrigger className="hover:no-underline py-4 md:py-5">
          <span className="flex items-center gap-3 font-semibold text-left text-sm md:text-base">
            <Ban className="h-4 w-4 md:h-5 md:w-5 text-accent flex-shrink-0" /> Must-Read
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground space-y-2 pb-4 md:pb-5 text-sm">
          <p>✗ Pets are not allowed. There are no pets living on the property.</p>
          <p>✓ Smoking within the premises is allowed.</p>
          <p>✓ Property is wheelchair accessible (guests must carry their own).</p>
          <p>✓ Allows private parties or events.</p>
          <p>✓ Caretaker greets you & helps you check-in. Smart Door self check-in available.</p>
          <p>⚠ There are restrictions on entry & exit timings for guests. Please check with host.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
);
