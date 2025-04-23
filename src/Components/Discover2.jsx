import React from 'react';

const DiscoverSection = () => {
  return (
    <div className="w-full px-4 md:px-12 py-10 space-y-8">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-[#0c0c1d]">Discover</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-6">
        {['All', 'Startups', 'Blog', 'Featured Lists'].map((item, index) => (
          <button
            key={item}
            className={`px-6 py-2 rounded-full font-medium ${
              index === 0
                ? 'bg-black text-white'
                : 'text-[#0c0c1d] hover:bg-gray-200'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Newsletter Banner */}
      <div className="bg-gradient-to-r from-[#1a0625] to-[#120021] text-white p-6 md:p-10 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side - Logo and text */}
        <div className="flex flex-col md:flex-row items-center gap-6 w-full">
          <div className="text-left md:border-r border-gray-500 pr-6">
            <p className="text-xl font-semibold">
              <span className="text-white">wellfound</span>
              <span className="text-red-500 text-2xl font-bold">:</span>
            </p>
            <p className="text-sm mt-1">NEWSLETTER</p>
          </div>

          <div className="text-left">
            <p className="uppercase text-sm text-gray-300 mb-1">
              The ultimate startup digest, sent weekly
            </p>
            <p className="text-lg font-semibold">
              Trending stories, startups to watch, what's next in tech, & so much more...
            </p>
          </div>
        </div>

        {/* Right side - CTA Button */}
        <div>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-5 rounded-full">
            Sign-up now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
