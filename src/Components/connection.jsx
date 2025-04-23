import React from 'react';

const ConnectSection = () => {
  return (
    <div data-aos="fade-up" className="w-full text-center py-20 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a0f0d] mb-10">
        Where startups and job seekers connect
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <button className="px-8 py-4 bg-[#071617] text-white font-semibold rounded-2xl text-lg hover:bg-[#0f1f21] transition">
          Find your next hire
        </button>
        <button className="px-8 py-4 bg-white text-black border border-gray-300 font-semibold rounded-2xl text-lg hover:bg-gray-100 transition">
          Find your next job
        </button>
      </div>
    </div>
  );
};

export default ConnectSection;
