import React from 'react';

const GetPostingSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-pink-600 uppercase tracking-wider">
            High exposure, great connection
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get posting, get visibility, get ready to hire
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Job Listings are visible where job-seekers spend their time: Wellfound’s job search, candidate emails, and our newsletter. 
            Your Job Listing typically gets thousands of views per week; if you need more exposure, promote your job with a few clicks 
            and gain visibility on a larger scale.
          </p>
          <a href="#" className="mt-6 inline-block text-pink-600 font-semibold hover:underline">
            Post a job for free →
          </a>
        </div>

        {/* Right Mockup Cards */}
        <div className="bg-pink-50 rounded-xl p-4 space-y-6">
          {/* Airtable Card */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Airtable_Logo.svg" alt="Airtable Logo" className="h-8 w-8" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Airtable</h4>
                <p className="text-xs text-gray-500">A spreadsheet with the power of database</p>
                <p className="text-xs text-gray-500 mt-1">👥 51–200 EMPLOYEES</p>
              </div>
            </div>
            {/* Placeholder for job listings */}
            <div className="mt-4 space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex justify-between items-center bg-gray-100 rounded-md h-6 w-full px-2">
                  <div className="w-2/3 h-3 bg-gray-300 rounded" />
                  <div className="text-xs text-blue-500">Apply</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cruise Card */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Cruise_logo_2022.svg" alt="Cruise Logo" className="h-8 w-8" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Cruise</h4>
                <p className="text-xs text-gray-500">A self-driving car service designed for the cities we love</p>
                <p className="text-xs text-gray-500 mt-1">👥 1001–5000 EMPLOYEES</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex justify-between items-center bg-gray-100 rounded-md h-6 w-full px-2">
                  <div className="w-2/3 h-3 bg-gray-300 rounded" />
                  <div className="text-xs text-blue-500">Apply</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetPostingSection;
