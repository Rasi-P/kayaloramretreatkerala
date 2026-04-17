import { MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-full gradient-sunset grid place-items-center">
              <MapPin className="h-4 w-4" />
            </div>
            <span className="font-display text-xl font-semibold">Kayaloram</span>
          </div>
          <p className="text-sm opacity-75 leading-relaxed">
            Curated lakeside homestays on the Kerala backwaters. Powered by Homeyhuts.
          </p>
        </div>

        {[
          { title: "Explore", items: ["Overview", "Rooms", "Location", "Rules"] },
          { title: "Company", items: ["About Homeyhuts", "Careers", "Press", "Contact"] },
          { title: "Support", items: ["Help Centre", "Cancellation", "Privacy", "Terms"] },
        ].map((col) => (
          <div key={col.title}>
            <p className="font-display text-sm uppercase tracking-widest opacity-60 mb-4">{col.title}</p>
            <ul className="space-y-2">
              {col.items.map((i) => (
                <li key={i}>
                  <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs opacity-60">© {new Date().getFullYear()} Kayaloram Retreat · All rights reserved</p>
        <div className="flex gap-3">
          {[Instagram, Facebook, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="h-9 w-9 rounded-full border border-primary-foreground/20 grid place-items-center hover:bg-accent hover:border-accent transition-colors">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
