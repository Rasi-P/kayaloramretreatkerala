import { motion } from "framer-motion";
import { Search, Menu, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Rooms", href: "#rooms" },
  { label: "Location", href: "#location" },
  { label: "Property Rules", href: "#rules" },
];

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 md:gap-3">
          <img src="/logo-transparent.png" alt="Kayaloram Logo" className="h-10 md:h-16 w-auto object-contain" />
          <span className="font-display text-xl md:text-2xl font-semibold tracking-tight">
            Kayaloram
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          <a href="tel:+911234567890">
            <Button variant="outline" size="icon" className="md:w-auto md:px-4 md:gap-2 h-9 w-9 md:h-10 rounded-full md:rounded-xl">
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">Call</span>
            </Button>
          </a>
          <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer">
            <Button variant="default" size="icon" className="bg-[#25D366] hover:bg-[#128C7E] text-white md:w-auto md:px-4 md:gap-2 h-9 w-9 md:h-10 rounded-full md:rounded-xl">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </Button>
          </a>
        </div>
      </div>
    </motion.header>
  );
};
