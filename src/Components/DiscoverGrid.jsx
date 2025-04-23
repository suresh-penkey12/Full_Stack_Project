import React from "react";
import firstImg from "../assets/first.webp"
import headshot from "../assets/headshot.jpeg"
import New from "../assets/new-york.jpg"
import Austin from "../assets/austin.jpg"
import stream from "../assets/stream.jpg"
import smark from "../assets/smark.jpg"
import founder from "../assets/founder.jpeg"

const DiscoverGrid = () => {
  const gridItems = [
    {
      type: "article",
      title: "Security in the Skies: 5 High Altitude Balloon and Satellite Startups Hiring Now",
      author: "Russ Rizzo",
      image: firstImg, // Replace with actual image
    },
    {
      type: "founder",
      name: "Christopher Kim",
      role: "CEO and Founder of Numer...",
      image: headshot, // Replace with actual
    },
    {
      type: "company",
      logo: stream,
      name: "Streamlabs",
      description: "Empower creators to do more",
    },
    {
      type: "company",
      logo: smark,
      name: "Smarkets",
      description: "Fintech meets betting",
    },
    {
      type: "city",
      image: New,
      name: "New York",
      detail: "1.2k startups currently hiring in...",
    },
    {
      type: "city",
      image: Austin,
      name: "Austin",
      detail: "243 startups currently hiring in...",
    },
    {
      type: "industry",
      icon: "✂️", // Replace with actual icon
      name: "Biotech",
      stats: "82 startups",
    },
    {
      type: "industry",
      icon: "🏢", // Replace with actual icon
      name: "Real Estate",
      stats: "174 startups",
    },
    {
      type: "article",
      title: "Hiring Now: 5 Startups Merging the Tech and Sports Industries in 2023",
      image: "https://via.placeholder.com/400x200",
    },
    {
      type: "founder",
      name: "Joe Malandruccolo",
      role: "Founder Interview",
      image: founder,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
      {gridItems.map((item, i) => {
        switch (item.type) {
          case "article":
            return (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  {item.author && <p className="text-sm text-gray-500 mt-2">{item.author}</p>}
                  <p className="text-sm text-blue-600 mt-1">Read full article →</p>
                </div>
              </div>
            );
          case "founder":
            return (
              <div key={i} className="bg-white rounded-xl shadow-sm p-4 flex items-start gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <p className="text-sm text-gray-500">From the Founders</p>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            );
          case "company":
            return (
              <div key={i} className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
                <img src={item.logo} alt={item.name} className="w-10 h-10 rounded-md" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            );
          case "city":
            return (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.detail}</p>
                  <p className="text-sm text-blue-600 mt-1">View startups →</p>
                </div>
              </div>
            );
          case "industry":
            return (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.stats}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default DiscoverGrid;
