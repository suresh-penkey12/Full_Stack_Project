import React from 'react';

const JobBoardSection = () => (
  <div className="bg-white py-12 sm:py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center lg:text-left">
      <p className="text-sm font-semibold text-pink-500 uppercase tracking-wider">
        JOB LISTINGS
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        A job board built for the startup world
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Post an infinite amount of jobs (for free) and instantly reach the most responsive,
        startup-ready community looking for their next great opportunity.
      </p>
      <div className="mt-8 flex justify-center lg:justify-start gap-4">
        <button
          className="rounded-md bg-gray-900 px-6 py-3 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Post a job
        </button>
        <button
          className="rounded-md bg-white px-6 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Request a demo
        </button>
      </div>
    </div>
  </div>
);

export default JobBoardSection;