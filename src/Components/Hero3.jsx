import React from 'react';

function HeroSection() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
        Find the job made for you.
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We make it easy to find what's next.
      </p>
      <p className="mt-2 text-base text-gray-600">
        Browse over 100,000 jobs — from top companies to fast-growing startups.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button
          className="rounded-md bg-gray-900 px-6 py-3 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Create your profile
        </button>
        <button
          className="rounded-md bg-white px-6 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Browse jobs
        </button>
      </div>
    </div>
  );
}

export default HeroSection;