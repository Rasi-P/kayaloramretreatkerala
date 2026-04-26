import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Send,
  Youtube,
} from "lucide-react";
import galleryOne from "@/assets/gallery-1.jpg";
import galleryTwo from "@/assets/gallery-2.jpg";
import galleryThree from "@/assets/gallery-3.jpg";
import galleryFour from "@/assets/gallery-4.jpg";
import heroLake from "@/assets/hero-lake.jpg";
import roomOne from "@/assets/room-1.jpg";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/#about-us" },
  { label: "Our Rooms", href: "/#rooms" },
  { label: "Book Now", href: "https://wa.me/911234567890" },
  { label: "Get Directions", href: "/#location" },
  { label: "Cancellation & Refunds", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const instagramImages = [
  galleryOne,
  galleryTwo,
  galleryThree,
  galleryFour,
  roomOne,
  heroLake,
];

export const Footer = () => (
  <footer className="bg-[#123f48] text-white">
    <div className="mx-auto max-w-[1140px] px-5 pt-20 md:pt-24">
      <div className="grid items-center gap-8 border-b border-white/20 pb-12 lg:grid-cols-[1fr_1.35fr]">
        <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-normal md:text-4xl">
          Get Updated The Latest Newsletter
        </h2>

        <form className="flex flex-col gap-4 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="footer-email">
            Enter Email
          </label>
          <input
            id="footer-email"
            type="email"
            placeholder="Enter Email"
            className="h-[54px] min-w-0 flex-1 rounded-full border border-white bg-transparent px-6 text-sm font-semibold text-white outline-none placeholder:text-white/90 focus:border-[#25abd0] focus:ring-2 focus:ring-[#25abd0]/30"
          />
          <button
            type="submit"
            className="inline-flex h-[54px] items-center justify-center gap-2 rounded-full bg-[#27abd0] px-8 text-sm font-bold text-white transition-colors hover:bg-[#1e98ba]"
          >
            Subscribe Now <Send className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.9fr_1.25fr_1.15fr] lg:gap-14">
        <div>
          <img
            src="/logo-transparent.png"
            alt="Kayaloram Logo"
            className="mb-8 h-12 w-auto object-contain brightness-0 invert"
          />
          <p className="max-w-[270px] text-sm leading-7 text-white/90">
            Kayaloram Retreat Kerala is the perfect getaway nestled amid the serene backwaters of
            Alleppey. Offering modern comforts, elegant stay options.
          </p>

          <div className="mt-6 flex gap-3">
            {[
              { label: "Facebook", icon: Facebook },
              { label: "YouTube", icon: Youtube },
              { label: "LinkedIn", icon: Linkedin },
              { label: "WhatsApp", icon: MessageCircle },
              { label: "Instagram", icon: Instagram },
            ].map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-[#27abd0]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-bold">Quick Links</h3>
          <ul className="space-y-4 text-sm text-white/95">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="inline-flex items-center gap-2 transition-colors hover:text-[#27abd0]">
                  <ChevronRight className="h-4 w-4" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-bold">Get In Touch</h3>
          <div className="space-y-5 text-sm font-semibold leading-6 text-white">
            <div className="flex gap-4">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                <PhoneCall className="h-4 w-4" />
              </span>
              <p>
                +91 12345 67890
                <br />
                +91 98765 43210
                <br />
                +91 98462 22898
              </p>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                <Mail className="h-4 w-4" />
              </span>
              <p>
                booking@kayaloramretreat.com
                <br />
                kayaloramretreat@gmail.com
              </p>
            </div>
            <div className="flex gap-4">
              <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                <MapPin className="h-4 w-4" />
              </span>
              <p>Kayaloram Retreat, Punnamada, Alappuzha - 688532</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-bold">Instagram Post</h3>
          <div className="grid max-w-[270px] grid-cols-3 gap-2">
            {instagramImages.map((image, index) => (
              <a
                key={image}
                href="/gallery"
                aria-label={`View gallery image ${index + 1}`}
                className="aspect-square overflow-hidden rounded bg-white/10"
              >
                <img src={image} alt="" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-white/20">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-4 px-5 py-5 text-xs font-semibold text-white md:flex-row md:items-center md:justify-between">
        <p>
          Copyright {new Date().getFullYear()}{" "}
          <a href="/" className="underline underline-offset-2">
            Kayaloram Retreat
          </a>
          . Developed by{" "}
          <a href="#" className="underline underline-offset-2">
            iGen Solutions
          </a>
          .
        </p>
        <div className="flex items-center gap-3">
          <span>We Accept</span>
          {["MC", "VISA", "PayPal", "Pay"].map((payment) => (
            <span key={payment} className="rounded bg-white px-2 py-1 text-[11px] font-black text-[#123f48]">
              {payment}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
