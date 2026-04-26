import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import galleryOne from "@/assets/gallery-1.jpg";
import galleryTwo from "@/assets/gallery-2.jpg";
import heroLake from "@/assets/hero-lake.jpg";
import roomOne from "@/assets/room-1.jpg";
import { ArrowRight, CalendarDays, Clock, Mail, MapPin, PhoneCall, Send } from "lucide-react";

const contactCards = [
  {
    title: "Call Us",
    detail: "+91 98765 43210",
    subtext: "Reservation support",
    icon: PhoneCall,
  },
  {
    title: "Write To Us",
    detail: "booking@kayaloramretreat.com",
    subtext: "Replies within a day",
    icon: Mail,
  },
  {
    title: "Visit Us",
    detail: "Punnamada, Alappuzha",
    subtext: "Kerala - 688532",
    icon: MapPin,
  },
];

const enquiryFields = [
  { label: "Full Name", placeholder: "Your name", required: true },
  { label: "Email Address", placeholder: "you@example.com", required: true, type: "email" },
  { label: "Mobile Number", placeholder: "+91 00000 00000", required: true },
  { label: "City", placeholder: "Where are you travelling from?", required: true },
  { label: "Check-in", placeholder: "Select date", type: "date" },
  { label: "Check-out", placeholder: "Select date", type: "date" },
];

const fieldClass =
  "h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-[#123f48] outline-none transition placeholder:text-slate-400 focus:border-[#1f8aa5] focus:ring-4 focus:ring-[#1f8aa5]/10";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#f7fbfb]">
      <Header />

      <section className="relative isolate mt-[70px] overflow-hidden bg-[#082d33]">
        <div className="absolute inset-0">
          <img src={heroLake} alt="Kayaloram backwater view" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082d33]/95 via-[#082d33]/70 to-black/25" />
        </div>

        <div className="relative mx-auto grid min-h-[560px] max-w-[1180px] items-center gap-10 px-5 py-20 lg:grid-cols-[1fr_420px]">
          <div className="max-w-2xl text-white">
            <p
              className="mb-3 text-3xl text-white/85"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              We are here to help
            </p>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">Plan Your Stay By The Backwaters</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/82 md:text-lg">
              Ask about rooms, arrival timing, local experiences, or a quiet weekend plan. Share a
              few details and the Kayaloram team will get back to you with the right stay option.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-full bg-[#28aecd] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:bg-[#2099b5]"
              >
                Call Now <PhoneCall className="h-4 w-4" />
              </a>
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 rounded-full border border-white/45 px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#123f48]"
              >
                Send Enquiry <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/12 p-4 shadow-2xl backdrop-blur-md">
            <div className="overflow-hidden rounded-xl bg-white">
              <img src={galleryOne} alt="Kayaloram resort" className="h-64 w-full object-cover" />
              <div className="space-y-4 p-6 text-[#123f48]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf7f9]">
                    <Clock className="h-5 w-5 text-[#1f8aa5]" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Guest support</p>
                    <p className="font-bold">9:00 AM - 9:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf7f9]">
                    <CalendarDays className="h-5 w-5 text-[#1f8aa5]" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">Best for</p>
                    <p className="font-bold">Family stays, workations, lake escapes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="relative z-10 mx-auto -mt-14 grid max-w-[1180px] gap-5 px-5 md:grid-cols-3">
          {contactCards.map(({ title, detail, subtext, icon: Icon }) => (
            <a
              key={title}
              href={title === "Call Us" ? "tel:+919876543210" : title === "Write To Us" ? "mailto:booking@kayaloramretreat.com" : "#map"}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-[#123f48]/8 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#123f48] text-white transition group-hover:bg-[#28aecd]">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">{title}</p>
              <h2 className="mt-2 text-lg font-bold text-[#123f48]">{detail}</h2>
              <p className="mt-1 text-sm text-slate-500">{subtext}</p>
            </a>
          ))}
        </section>

        <section id="enquiry" className="px-5 py-20 md:py-28">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p
                className="mb-2 text-3xl text-[#5d6b70]"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Contact Kayaloram
              </p>
              <h2 className="text-4xl font-bold leading-tight text-[#123f48] md:text-5xl">
                Tell us what kind of stay you have in mind.
              </h2>
              <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
                Whether it is a room enquiry, group booking, celebration, or destination guidance,
                send the essentials and we will help you shape the plan.
              </p>

              <div className="mt-8 overflow-hidden rounded-2xl">
                <img src={galleryTwo} alt="Resort greenery" className="h-72 w-full object-cover" />
              </div>
            </div>

            <form
              className="rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl shadow-[#123f48]/10 md:p-8"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {enquiryFields.map((field) => (
                  <label key={field.label} className="space-y-2 text-sm font-semibold text-[#123f48]">
                    <span>
                      {field.label} {field.required && <span className="text-[#d8504a]">*</span>}
                    </span>
                    <input className={fieldClass} type={field.type ?? "text"} placeholder={field.placeholder} />
                  </label>
                ))}
              </div>

              <label className="mt-5 block space-y-2 text-sm font-semibold text-[#123f48]">
                <span>
                  Enquiry Type <span className="text-[#d8504a]">*</span>
                </span>
                <select className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option>Room booking</option>
                  <option>Group stay</option>
                  <option>Event or celebration</option>
                  <option>Destination guidance</option>
                </select>
              </label>

              <label className="mt-5 block space-y-2 text-sm font-semibold text-[#123f48]">
                <span>
                  Message <span className="text-[#d8504a]">*</span>
                </span>
                <textarea
                  className="min-h-36 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-[#123f48] outline-none transition placeholder:text-slate-400 focus:border-[#1f8aa5] focus:ring-4 focus:ring-[#1f8aa5]/10"
                  placeholder="Tell us your dates, number of guests, and anything we should arrange..."
                />
              </label>

              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#123f48] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#0b2c32]"
              >
                Send Enquiry <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>

        <section id="map" className="bg-white px-5 pb-20">
          <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-3xl border border-slate-100 bg-[#123f48] shadow-2xl shadow-[#123f48]/10 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="p-8 text-white md:p-10">
              <p
                className="mb-2 text-3xl text-white/80"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Find the way
              </p>
              <h2 className="text-3xl font-bold">Arrive at the water, leave the noise behind.</h2>
              <p className="mt-5 text-sm leading-7 text-white/78">
                Kayaloram Retreat sits close to Alappuzha's backwater routes, with easy access to
                local attractions and calm waterside evenings.
              </p>
              <div className="mt-8 space-y-4 text-sm font-semibold">
                <p className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#28aecd]" />
                  Kayaloram Retreat, Punnamada, Alappuzha, Kerala - 688532
                </p>
                <p className="flex gap-3">
                  <PhoneCall className="mt-1 h-5 w-5 shrink-0 text-[#28aecd]" />
                  +91 98765 43210
                </p>
              </div>
            </div>
            <div className="min-h-[420px]">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=76.3000,9.4700,76.3800,9.5400&layer=mapnik&marker=9.5000,76.3400"
                className="h-full min-h-[420px] w-full border-0"
                loading="lazy"
                title="Kayaloram Retreat map"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 pb-24">
          <div className="mx-auto grid max-w-[1180px] gap-5 md:grid-cols-3">
            {[roomOne, heroLake, galleryOne].map((image, index) => (
              <div key={image} className={`overflow-hidden rounded-2xl ${index === 1 ? "md:translate-y-8" : ""}`}>
                <img src={image} alt="" className="h-72 w-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
