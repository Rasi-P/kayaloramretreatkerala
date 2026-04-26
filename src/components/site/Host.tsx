import React from "react";

const teamMembers = [
  { name: "Suresh", role: "Manager", image: "https://i.pravatar.cc/150?u=suresh" },
  { name: "Abhiram", role: "Chef", image: "https://i.pravatar.cc/150?u=abhiram" },
  { name: "Vishnu", role: "Staff", image: "https://i.pravatar.cc/150?u=vishnu" },
  { name: "Varghese", role: "Staff", image: "https://i.pravatar.cc/150?u=varghese" },
];

export const Host = () => (
  <section id="team" className="container px-4 py-10 bg-white text-center">
    <div className="max-w-4xl mx-auto">
      <p className="text-[#0f8a84] font-semibold text-sm uppercase tracking-widest mb-2">-- The Team --</p>
      <h2 className="text-2xl md:text-4xl font-bold text-[#112a29] mb-10">
        Meet our dedicated staff
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md mb-3 border-4 border-gray-50">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <h3 className="font-bold text-[#112a29] text-lg">{member.name}</h3>
            <p className="text-sm font-semibold text-[#0f8a84]">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

