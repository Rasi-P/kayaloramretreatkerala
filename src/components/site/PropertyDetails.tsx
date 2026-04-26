import { Clock, Users, IndianRupee, MapPin } from "lucide-react";

export const PropertyDetails = () => (
  <section className="container px-4 py-8 bg-[#F8FAFC]">
    <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold text-[#112a29] mb-6">Property Details</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Clock className="w-4 h-4 text-[#0f8a84]" />
            <span className="text-xs uppercase font-semibold">Check-In</span>
          </div>
          <p className="font-medium text-gray-800">12:00 PM</p>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Clock className="w-4 h-4 text-[#0f8a84]" />
            <span className="text-xs uppercase font-semibold">Check-Out</span>
          </div>
          <p className="font-medium text-gray-800">11:00 AM</p>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <Users className="w-4 h-4 text-[#0f8a84]" />
            <span className="text-xs uppercase font-semibold">Max Guests</span>
          </div>
          <p className="font-medium text-gray-800">4</p>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-gray-500 mb-1">
            <IndianRupee className="w-4 h-4 text-[#0f8a84]" />
            <span className="text-xs uppercase font-semibold">Price</span>
          </div>
          <p className="font-medium text-gray-800">RS 3000/night</p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100 flex items-start gap-3">
        <MapPin className="w-5 h-5 text-[#0f8a84] flex-shrink-0 mt-0.5" />
        <div>
          <span className="text-xs uppercase font-semibold text-gray-500 block mb-1">Address</span>
          <p className="font-medium text-gray-800 text-sm">kayaloram retreat, punnamada, alappuzha</p>
        </div>
      </div>
    </div>
  </section>
);
