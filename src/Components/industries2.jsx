import React from "react";
import {
  Rocket,
  BrainCircuit,
  FlaskConical,
  Sun,
  Smartphone,
  Cloud,
  Code2,
  ShoppingCart,
  BookOpen,
  Building2,
  Banknote,
  Heart,
  ShieldCheck,
  Truck,
  Dot,
  Building,
  ServerCog,
  Bitcoin,
} from "lucide-react";

const industries = [
  { name: "Aerospace", icon: <Rocket size={18} /> },
  { name: "AI/ML", icon: <BrainCircuit size={18} /> },
  { name: "Biotech", icon: <FlaskConical size={18} /> },
  { name: "Cleantech", icon: <Sun size={18} /> },
  { name: "Consumer", icon: <Smartphone size={18} /> },
  { name: "Cyber Security", icon: <Cloud size={18} /> },
  { name: "Developer Tools", icon: <Code2 size={18} /> },
  { name: "E-commerce", icon: <ShoppingCart size={18} /> },
  { name: "Edtech", icon: <BookOpen size={18} /> },
  { name: "Enterprise", icon: <Building2 size={18} /> },
  { name: "Fintech", icon: <Banknote size={18} /> },
  { name: "Healthcare", icon: <Heart size={18} /> },
  { name: "Insurance", icon: <ShieldCheck size={18} /> },
  { name: "Logistics", icon: <Truck size={18} /> },
  { name: "Mental Health", icon: <Dot size={18} /> },
  { name: "Real Estate", icon: <Building size={18} /> },
  { name: "SaaS", icon: <ServerCog size={18} /> },
  { name: "Web3/Crypto", icon: <Bitcoin size={18} /> },
];

const DiscoverIndustries = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-[#010638] mb-10">Discover Industries</h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {industries.map((item, idx) => (
            <button
              key={idx}
              className="flex items-center gap-2 border border-gray-300 text-sm px-5 py-3 rounded-full text-black bg-white hover:bg-gray-100 transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverIndustries;
