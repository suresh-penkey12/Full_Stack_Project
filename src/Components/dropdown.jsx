import React, { useState } from 'react';

const DropdownMenu = () => {
  const [jobCollectionsOpen, setJobCollectionsOpen] = useState(false);
  const [remoteJobsOpen, setRemoteJobsOpen] = useState(false);
  const [jobsByLocationOpen, setJobsByLocationOpen] = useState(false);
  const [jobsByRoleOpen, setJobsByRoleOpen] = useState(false);
  const [jobsByRoleLocationOpen, setJobsByRoleLocationOpen] = useState(false);

  return (
    <div className="bg-purple-800 py-4 flex justify-center space-x-4">
      {/* Job Collections Dropdown */}
      <div className="relative">
        <button
          className="bg-transparent border border-white rounded-md text-white px-4 py-2 flex items-center focus:outline-none"
          onClick={() => setJobCollectionsOpen(!jobCollectionsOpen)}
        >
          Job Collections
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${jobCollectionsOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {jobCollectionsOpen && (
          <div className="absolute left-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Featured
            </a>
          </div>
        )}
      </div>

      {/* Remote Jobs Dropdown */}
      <div className="relative">
        <button
          className="bg-transparent border border-white rounded-md text-white px-4 py-2 flex items-center focus:outline-none"
          onClick={() => setRemoteJobsOpen(!remoteJobsOpen)}
        >
          Remote Jobs
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${remoteJobsOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {remoteJobsOpen && (
          <div className="absolute left-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Anywhere
            </a>
          </div>
        )}
      </div>

      {/* Jobs by Location Dropdown */}
      <div className="relative">
        <button
          className="bg-transparent border border-white rounded-md text-white px-4 py-2 flex items-center focus:outline-none"
          onClick={() => setJobsByLocationOpen(!jobsByLocationOpen)}
        >
          Jobs by Location
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${jobsByLocationOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {jobsByLocationOpen && (
          <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Hyderabad
            </a>
          </div>
        )}
      </div>

      {/* Jobs by Role Dropdown */}
      <div className="relative">
        <button
          className="bg-transparent border border-white rounded-md text-white px-4 py-2 flex items-center focus:outline-none"
          onClick={() => setJobsByRoleOpen(!jobsByRoleOpen)}
        >
          Jobs by Role
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${jobsByRoleOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {jobsByRoleOpen && (
          <div className="absolute left-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Engineer
            </a>
          </div>
        )}
      </div>

      {/* Jobs by Role & Location Dropdown */}
      <div className="relative">
        <button
          className="bg-transparent border border-white rounded-md text-white px-4 py-2 flex items-center focus:outline-none"
          onClick={() => setJobsByRoleLocationOpen(!jobsByRoleLocationOpen)}
        >
          Jobs by Role & Location
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${jobsByRoleLocationOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {jobsByRoleLocationOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Engineer in Hyderabad
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;