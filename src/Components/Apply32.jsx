import React from 'react';
import {
  BellAlertIcon,
  FunnelIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const RightContentLeftImage = () => (
  <div className="bg-white py-14 sm:py-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Left Side (Image Placeholder) */}
      <div className="relative order-first lg:order-last">
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md">
          <img
            src="https://dummyimage.com/640x360/f0e68c/8b4513&text=Abstract+Graphic"
            alt="Abstract Graphic"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-6 left-6 bg-yellow-400 rounded-full w-16 h-8 opacity-50 blur"></div>
          <div className="absolute top-16 right-8 bg-yellow-300 w-10 h-20 opacity-40 rounded-md"></div>
          <div className="absolute bottom-10 left-10 bg-yellow-500 rounded-md w-12 h-12 opacity-60"></div>
          <div className="absolute top-32 left-2/3 transform -translate-x-1/2 animate-wiggle">
            <svg className="w-16 h-8 text-yellow-300 opacity-50" viewBox="0 0 20 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 4c2 2 4 2 6 0 2-2 4-2 6 0 2 2 4 2 6 0" />
            </svg>
          </div>
          <div className="absolute bottom-16 right-1/4 transform translate-x-1/2">
            <svg className="w-8 h-4 text-yellow-400 opacity-60" viewBox="0 0 20 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 4c2 2 4 2 6 0" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Side (Content) */}
      <div className="order-last lg:order-first">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Find work that works for you
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          A personalized and private job search, with all the info you care about, all upfront
        </p>

        <div className="mt-8 space-y-6">
          {/* Stay in the know */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="rounded-md bg-indigo-50 p-3">
                <BellAlertIcon className="h-6 w-6 text-indigo-500" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Stay in the know</h3>
              <p className="mt-2 text-base text-gray-600">
                No guessing games. View salary and stock options before you apply.
              </p>
            </div>
          </div>

          {/* Personalized search */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="rounded-md bg-pink-50 p-3">
                <FunnelIcon className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Personalized search</h3>
              <p className="mt-2 text-base text-gray-600">
                Personalized filters make it quick and easy to find the jobs you care about.
              </p>
            </div>
          </div>

          {/* Unique roles, exciting teams */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="rounded-md bg-lime-50 p-3">
                <SparklesIcon className="h-6 w-6 text-lime-500" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Unique roles, exciting teams</h3>
              <p className="mt-2 text-base text-gray-600">
                Discover unique jobs with future-defining teams.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            className="rounded-md bg-gray-900 px-6 py-3 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Browse jobs
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default RightContentLeftImage;
