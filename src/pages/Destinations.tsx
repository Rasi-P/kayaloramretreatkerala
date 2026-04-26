import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import room1 from "@/assets/room-1.jpg";
import heroImg from "@/assets/hero-lake.jpg";

const destinations = [
  {
    title: "VEMBANAD LAKE",
    desc: "Vembanad Lake is the longest lake in India, and the largest lake in the state of Kerala. Spanning several districts, it is known for its scenic beauty, backwater tourism, and the famous Nehru Trophy Boat Race. A must-visit for nature lovers seeking peace and tranquility.",
    img: heroImg
  },
  {
    title: "MARARI BEACH",
    desc: "Marari Beach is a pristine, white-sand beach located just a short drive from Alleppey. It offers a quiet and relaxing atmosphere, away from the bustling crowds. Perfect for a sunset stroll, sunbathing, or experiencing the local fishing village culture.",
    img: g1
  },
  {
    title: "ALLEPPEY BACKWATERS",
    desc: "The Alleppey Backwaters are a vast network of interconnected canals, rivers, and lakes. Known as the 'Venice of the East', navigating these serene waters on a traditional houseboat is a once-in-a-lifetime experience, offering glimpses of authentic rural Kerala life.",
    img: g2
  },
  {
    title: "ALAPPUZHA LIGHTHOUSE",
    desc: "Built in 1862, the Alappuzha Lighthouse is a historic maritime landmark. Visitors can climb to the top for a breathtaking panoramic view of the Arabian Sea and the lush coastal landscape of Alleppey. A perfect spot for photography enthusiasts.",
    img: room1
  }
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-[#f8fcfb] flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center mt-[70px]">
        <img src={heroImg} alt="Destinations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-wider">
          Destinations
        </h1>
      </div>

      <main className="flex-1 w-full pb-20">
        
        {/* Intro Section */}
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-[#2d5a3e] mb-6 tracking-widest uppercase">
            DESTINATIONS
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Kerala's Alleppey district is brimming with natural wonders and cultural heritage. From the serene backwaters to the vibrant coastal beaches, explore the best spots our region has to offer. We are strategically located to give you easy access to these iconic locations, ensuring your stay is filled with discovery and adventure.
          </p>
        </div>

        {/* Alternating Destinations List */}
        <div className="container mx-auto max-w-5xl px-4 flex flex-col gap-16 md:gap-24 mb-24">
          {destinations.map((dest, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={dest.title} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold text-[#2d5a3e] mb-4 tracking-wider">
                    {dest.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {dest.desc}
                  </p>
                  <button className="border-2 border-[#2d5a3e] text-[#2d5a3e] hover:bg-[#2d5a3e] hover:text-white px-6 py-2 text-sm font-semibold tracking-wider transition-colors">
                    KNOW MORE
                  </button>
                </div>

                {/* Image */}
                <div className="flex-1 w-full h-[250px] md:h-[350px]">
                  <img 
                    src={dest.img} 
                    alt={dest.title} 
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Find Us Section */}
        <div className="container mx-auto max-w-6xl px-4 pt-10 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-[#2d5a3e] mb-8">
            Find Us
          </h2>
          
          <div className="flex flex-col md:flex-row gap-10">
            {/* Contact Details */}
            <div className="flex-1 flex flex-col gap-6">
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Reach out to us for any inquiries or to book your stay. We are always here to help you plan your perfect getaway in Alleppey.
              </p>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2d5a3e] flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#112a29] text-sm">Location</h4>
                  <p className="text-gray-500 text-sm">Kayaloram Retreat, Punnamada, Alappuzha, Kerala 688006</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2d5a3e] flex items-center justify-center text-white flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#112a29] text-sm">Phone</h4>
                  <p className="text-gray-500 text-sm">+91 98765 43210</p>
                  <p className="text-gray-500 text-sm">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2d5a3e] flex items-center justify-center text-white flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#112a29] text-sm">Email</h4>
                  <p className="text-gray-500 text-sm">info@kayaloramretreat.com</p>
                </div>
              </div>

              <div className="mt-4">
                <button className="flex items-center gap-2 bg-[#2d5a3e] hover:bg-[#1f422c] text-white px-6 py-3 rounded-full font-semibold transition-colors">
                  <Navigation className="w-4 h-4" />
                  Get Direction
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="flex-1 h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=76.3,9.4,76.4,9.6&layer=mapnik&marker=9.5,76.35"
                className="w-full h-full border-0"
                loading="lazy"
                title="Kayaloram Retreat Location Map"
              />
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Destinations;
