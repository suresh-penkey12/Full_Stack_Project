import React from 'react';
import { UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

const LetOpportunitiesComeSection = () => (
  <div className="bg-white py-14 sm:py-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Left Side (Image Placeholder - Beach Scene) */}
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-md">
          <img
            src="https://dummyimage.com/640x360/a8b4cf/374151&text=Beach+Scene"
            alt="Beach Scene with Chair and Umbrella"
            className="object-cover w-full h-full"
          />
          {/* You would replace the dummy image with your actual beach scene graphic */}
        </div>
      </div>

      {/* Right Side (Content) */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Let the opportunities come to you
        </h2>

        <div className="mt-8 space-y-6">
          {/* Connect with founders */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="rounded-md bg-red-50 p-3">
                <UserGroupIcon className="h-6 w-6 text-red-500" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Connect with founders</h3>
              <p className="mt-2 text-base text-gray-600">
                Let founders pitch you directly on their opportunity.
              </p>
            </div>
          </div>

          {/* Get featured */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="rounded-md bg-orange-50 p-3">
                <StarIcon className="h-6 w-6 text-orange-500" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Get featured</h3>
              <p className="mt-2 text-base text-gray-600">
                Feature your profile even further and make 3x more connections.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            className="rounded-md bg-gray-900 px-6 py-3 font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default LetOpportunitiesComeSection;