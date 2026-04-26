import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/#about-us" },
    { name: "ROOMS", path: "/#rooms" },
    { name: "DESTINATIONS", path: "/destinations" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 shadow-lg py-2 backdrop-blur-md" : "bg-transparent py-6"
      }`}
    >
      <div className="container px-4 flex items-center justify-between mx-auto xl:max-w-[1400px]">
        <a href="/" className="flex items-center gap-2 relative z-10">
          {/* Logo */}
          <img
            src="/logo-transparent.png"
            alt="Kayaloram Logo"
            className="h-12 md:h-16 w-auto object-contain brightness-0 invert"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4 relative z-10">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`text-white text-[13px] font-bold tracking-wide transition-all px-4 py-2 rounded-full whitespace-nowrap ${
                item.name === "HOME" ? "bg-white/20 backdrop-blur-sm" : "hover:bg-white/10"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Book Now Button (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-10">
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#2d7a3e] hover:bg-[#1f5c2c] text-white px-7 py-2.5 rounded-full font-bold text-sm tracking-wider transition-colors shadow-md"
          >
            BOOK NOW <ArrowRight className="w-4 h-4 ml-1" />
          </a>

          <button
            className="text-white p-2 lg:hidden bg-black/20 rounded-md backdrop-blur-sm"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
        
        {/* Subtle dark gradient overlay at the top to ensure text is always readable even before scrolling, matching reference */}
        {!scrolled && <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none -z-10" />}
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg overflow-hidden border-t border-white/10"
          >
            <div className="container py-4 flex flex-col px-6">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 text-white text-base font-bold tracking-wider border-b border-white/10 last:border-0"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-2 bg-[#2d7a3e] text-white px-6 py-4 rounded-full font-bold tracking-wider"
              >
                BOOK NOW <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};



