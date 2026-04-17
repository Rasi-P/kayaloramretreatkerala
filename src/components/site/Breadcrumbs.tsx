import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const crumbs = ["Home", "Hotels in India", "Alleppey", "Budget Homestay", "Kayaloram Retreat"];

export const Breadcrumbs = () => (
  <motion.nav
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="container pt-24 md:pt-28 pb-4"
    aria-label="Breadcrumb"
  >
    <ol className="flex flex-wrap items-center gap-1 text-xs md:text-sm text-muted-foreground">
      {crumbs.map((c, i) => (
        <li key={c} className="flex items-center gap-1">
          <a href="#" className="hover:text-primary transition-colors">{c}</a>
          {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3 opacity-50" />}
        </li>
      ))}
    </ol>
  </motion.nav>
);
