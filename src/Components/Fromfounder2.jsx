import React from "react";

const founderArticles = [
  {
    title: "From the Founder | Julien Nakache, Founder of...",
    desc: "In this interview with Founder & CEO, Julien Nakache from Medbill AI, we learn about his journey as a founder, how he...",
    image: "https://images.unsplash.com/photo-1",
    large: true,
  },
  {
    title: "From the Founder | Kenji Niwa",
    desc: "In this interview with Co-Founder and CEO of Firstcard, Kenji Niwa...",
    image: "https://images.unsplash.com/photo-2",
    large: false,
  },
  {
    title: "From the Founder | Tomash Devenishek",
    desc: "In this interview with Tomash Devenishek, CEO and Founder of...",
    image: "https://images.unsplash.com/photo-3",
    large: false,
  },
  {
    title: "From the Founder | Christopher Kim, CEO +...",
    desc: "In this interview with Christopher Kim, CEO and Founder of Numeral we learn about his journey as a founder, how he...",
    image: "https://images.unsplash.com/photo-4",
    large: true,
  },
];

const FromFounders = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-[#010638]">From the Founders</h2>
        <a href="#" className="text-sm font-medium text-gray-600 hover:underline flex items-center gap-1">
          More founder articles <span className="text-xl">›</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left large card */}
        <div className="md:col-span-1">
          <div className="border rounded-xl p-4 shadow-sm bg-white h-full">
            <img src={founderArticles[0].image} alt="" className="w-full h-52 object-cover rounded-md mb-4" />
            <p className="text-sm text-gray-500 mb-1">From the Founders</p>
            <h3 className="text-lg font-semibold text-black leading-tight mb-2">
              {founderArticles[0].title}
            </h3>
            <p className="text-sm text-gray-600">{founderArticles[0].desc}</p>
          </div>
        </div>

        {/* Two stacked cards */}
        <div className="md:col-span-1 flex flex-col gap-6">
          {[founderArticles[1], founderArticles[2]].map((item, idx) => (
            <div key={idx} className="border rounded-xl p-4 shadow-sm bg-white flex items-start gap-4">
              <img src={item.image} alt="" className="w-20 h-20 object-cover rounded-md" />
              <div>
                <p className="text-sm text-gray-500 mb-1">From the Founders</p>
                <h3 className="text-sm font-semibold text-black leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right large card */}
        <div className="md:col-span-2">
          <div className="border rounded-xl p-4 shadow-sm bg-white h-full">
            <img src={founderArticles[3].image} alt="" className="w-full h-52 object-cover rounded-md mb-4" />
            <p className="text-sm text-gray-500 mb-1">From the Founders</p>
            <h3 className="text-lg font-semibold text-black leading-tight mb-2">
              {founderArticles[3].title}
            </h3>
            <p className="text-sm text-gray-600">{founderArticles[3].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FromFounders;
