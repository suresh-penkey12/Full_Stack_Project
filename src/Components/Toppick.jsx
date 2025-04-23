import React from 'react';

const TopPicks2025Tailwind = () => {
  return (
    <div className="bg-black text-white flex items-center p-10 rounded-lg max-w-2xl mx-auto">
      <div className="mr-10">
        <div className="relative w-32 h-36 bg-white text-black flex flex-col justify-center items-center clip-polygon">
          <div className="text-xs font-bold mb-1">wellfound:</div>
          <div className="flex items-baseline">
            <span className="text-5xl font-bold text-red-500 mr-1">10</span>
            <span className="text-lg">of</span>
            <span className="text-5xl font-bold text-red-500 ml-1">10</span>
          </div>
          <div className="text-xl font-bold mt-1">in 2025</div>
        </div>
      </div>
      <div className="flex-grow">
        <h2 className="text-2xl font-bold mb-4">Our top picks for 2025 are here!</h2>
        <p className="text-lg leading-relaxed mb-6">
          Wellfound has selected 10 startups across 10 trending industries that
          should be on your radar in 2025. See what teams our community is most
          excited about in the year ahead!
        </p>
        <button className="bg-white text-black font-bold py-3 px-6 rounded-md text-lg hover:bg-gray-100 transition-colors">
          Explore our 10 of 10
        </button>
      </div>
    </div>
  );
};

export default TopPicks2025Tailwind;