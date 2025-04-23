import React from "react";

const featuredLists = [
  {
    title: "Security in the Skies: 5 High Altitude Balloon and Satellite Startups Hiring Now",
    image: "https://images.unsplash.com/photo-1603578672855-bf0b6a60b3a1", // Replace with actual
    author: "Russ Rizzo",
  },
  {
    title: "Hiring Now: 5 Startups Merging the Tech and Sports Industries in 2023",
    image: "https://images.unsplash.com/photo-1603578672855-bf0b6a60b3a2",
    author: "Coley Gmeinder",
  },
  {
    title: "28 London-Based Startups You'll Want to Work For in 2023",
    image: "https://images.unsplash.com/photo-1603578672855-bf0b6a60b3a3",
    author: "Russ Rizzo",
  },
];

const FeaturedLists = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#010638]">Featured Lists</h2>
        <a href="#" className="text-sm font-medium text-gray-600 hover:underline flex items-center gap-1">
          More featured lists <span className="text-xl">›</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredLists.map((list, index) => (
          <div key={index} className="border rounded-xl p-4 bg-white shadow-sm">
            <img
              src={list.image}
              alt={list.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-4 leading-tight">
              {list.title}
            </h3>
            <div className="flex justify-between text-sm text-gray-600 font-medium">
              <span>{list.author}</span>
              <a href="#" className="hover:underline flex items-center gap-1">
                Read full article <span className="text-base">›</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedLists;
