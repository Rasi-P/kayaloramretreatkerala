import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import room1 from "@/assets/room-1.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";

const images = [room1, g1, g2];

export const Rooms = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="rooms" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <p 
            className="font-dancing text-3xl text-[#4a5568] mb-1"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Best Resort For You
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#112a29] mb-6">
            Our Featured Room
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            At Kayaloram Retreat, we believe in providing an unparalleled experience for our guests.
            Whether you're looking to unwind by the lake or simply revel in the scenic views from our
            luxurious rooms overlooking the backwaters, we cater to every desire.
          </p>
        </div>

        {/* Room Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Image Gallery */}
          <div className="relative rounded-3xl overflow-hidden shadow-lg group h-[300px] md:h-[450px]">
            <img 
              src={images[currentImg]} 
              alt="102 Cinemon Room" 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Arrows */}
            <button 
              onClick={prevImg}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-[#1da855] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImg}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-[#1da855] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImg(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImg ? "bg-[#1da855] w-4" : "bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Room Details */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-[#112a29] mb-2">102 Cinemon | Lake View</h3>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              <div className="flex text-[#facc15]">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm font-semibold text-gray-600 ml-1">(4.8 Rating)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-end gap-3 mb-1">
                <span className="text-xl text-gray-400 line-through font-semibold">₹ 4,139</span>
                <span className="text-3xl font-bold text-[#1da855]">₹ 3,552</span>
                <span className="text-sm text-gray-500 mb-1">/per Night</span>
              </div>
              <p className="text-xs text-gray-400">+₹ 414 taxes & fees</p>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Our Cinemon Lake View room offers spacious comfort and modern elegance. Unwind after a day of exploration in a cozy retreat made for relaxation. The perfect blend of style and serenity for your getaway.
            </p>

            {/* Details Table */}
            <div className="space-y-3 mb-8">
              <div className="grid grid-cols-[100px_1fr] gap-4 items-start">
                <span className="font-semibold text-[#112a29] text-sm">Capacity:</span>
                <span className="text-gray-500 text-sm">2 Persons (Private Spaces, 1 x Bedroom)</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4 items-start">
                <span className="font-semibold text-[#112a29] text-sm">Bed:</span>
                <span className="text-gray-500 text-sm">1 Queen Bed</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] gap-4 items-start">
                <span className="font-semibold text-[#112a29] text-sm">Amenities:</span>
                <span className="text-gray-500 text-sm">Free Cancellation before 14 May, Wi-Fi, Room Service, Laundry, Mineral Water, TV, Kettle.</span>
              </div>
            </div>

            {/* Book Button */}
            <a 
              href="https://wa.me/911234567890" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#112a29] text-[#112a29] hover:bg-[#112a29] hover:text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors w-max"
            >
              Book Now <ArrowRight className="w-4 h-4" />
            </a>
            
            {/* <p className="text-xs font-semibold text-[#1da855] mt-4">
              KOTAK Credit Card NoCostEMI Offer - Get INR 732 Off!
            </p> */}

          </div>
        </div>
      </div>
    </section>
  );
};


