import React from 'react';
import { ChevronDown } from 'lucide-react';

const startupNames = ['cruise', 'doordash', 'roblox', 'honey', 'peloton'];

const StatsSection = () => {
  return (
    <div data-aos="fade-down" className="relative bg-[#1a0826] text-white pt-20 pb-12 px-4 overflow-hidden">
      {/* Arrow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#1a0826] rounded-full flex items-center justify-center z-10 shadow-lg">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-12 mb-16">
        <div>
          <h3 className="text-5xl font-extrabold">8M+</h3>
          <p className="mt-2 text-lg font-semibold">Matches Made</p>
        </div>
        <div>
          <h3 className="text-5xl font-extrabold">150K+</h3>
          <p className="mt-2 text-lg font-semibold">Tech Jobs</p>
        </div>
        <div>
          <h3 className="text-5xl font-extrabold">10M+</h3>
          <p className="mt-2 text-lg font-semibold">Startup Ready Candidates</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 max-w-5xl mx-auto mb-14" />

      {/* Scrolling Startup Names */}
      <div className="overflow-hidden relative h-10">
        <div className="absolute animate-scroll-left whitespace-nowrap flex gap-16 text-xl font-medium capitalize text-white">
          {[...startupNames, ...startupNames].map((name, index) => (
            <span key={index} className="min-w-max">{name}</span>
          ))}
        </div>
      </div>

      {/* Caption */}
      <p className="text-center text-white/70 text-sm font-medium mt-6">
        Startups who used our platform
      </p>
    </div>
  );
};

export default StatsSection;
