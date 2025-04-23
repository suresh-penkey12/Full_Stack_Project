import React from 'react';

const InboundTalentSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <p className="text-sm font-semibold text-pink-600 uppercase tracking-wider">
            More inbound, less clutter
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Handle inbound talent with ease
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            With custom application questions, smart filters, and an auto-organized functionality based on how well talent matches your criteria,
            we thought of everything to make your inbound management seamless. Spend less time sifting through applicants, and more time connecting
            with great matches.
          </p>
          <a href="#" className="mt-6 inline-block text-pink-600 font-semibold hover:underline">
            Get started with Job Listings →
          </a>
        </div>

        {/* Right visual card */}
        <div className="flex justify-center">
          <div className="bg-pink-50 p-6 rounded-2xl shadow-inner w-full max-w-md">
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Applicant Preferences</h3>
              <p className="text-sm text-gray-500">Sort applicants based on your preferences</p>

              {/* Preference Fields */}
              <div className="space-y-4 mt-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Work Experience</label>
                  <div className="mt-1 bg-gray-100 h-5 w-full rounded"></div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Skills</label>
                  <div className="mt-1 bg-gray-100 h-5 w-full rounded"></div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Location</label>
                  <div className="mt-1 bg-gray-100 h-5 w-3/4 rounded"></div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Work Authorization</label>
                  <div className="mt-1 bg-gray-100 h-5 w-1/2 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InboundTalentSection;
