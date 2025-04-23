import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { FingerPrintIcon, CogIcon } from '@heroicons/react/24/outline'; // Using CogIcon as a likely alternative

const LeftImageRightContent = () => (
  <div className="bg-white py-14 sm:py-20">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Left Side (Image Placeholder) */}
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://dummyimage.com/640x360/ccddcc/336633&text=Left+Image"
            alt="Left Side Image"
            className="object-cover w-full h-full"
          />
          {/* Optional: Decorative elements */}
          <div className="absolute top-4 left-4 bg-blue-500 bg-opacity-20 rounded-full w-12 h-12 blur-md"></div>
          <div className="absolute bottom-6 right-6 bg-teal-500 bg-opacity-20 rounded-full w-8 h-8 blur-sm"></div>
        </div>
      </div>

      {/* Right Side (Content) */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Main Heading Here
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          A compelling description or introductory text goes here. Explain the benefits or features.
        </p>

        <div className="mt-6 space-y-5">
          {/* Feature Point 1 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="rounded-md bg-indigo-50 p-3">
                <CogIcon className="h-6 w-6 text-indigo-500" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Feature Title One</h3>
              <p className="mt-2 text-base text-gray-600">
                Detailed description of the first feature. Provide more context and information.
              </p>
            </div>
          </div>

          {/* Feature Point 2 */}
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="rounded-md bg-pink-50 p-3">
                <FingerPrintIcon className="h-6 w-6 text-pink-500" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">Feature Title Two</h3>
              <p className="mt-2 text-base text-gray-600">
                Explanation of the second feature. Highlight its unique aspects and advantages.
              </p>
            </div>
          </div>

          {/* Add more feature points as needed */}
        </div>

        <div className="mt-8">
          <button
            className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 font-medium text-white shadow-sm hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Call to Action Button
            <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default LeftImageRightContent;