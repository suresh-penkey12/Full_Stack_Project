import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-900 py-12 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Wellfound Logo and Description (Adjust as needed) */}
        <div>
          <h1 className="text-2xl font-bold mb-4">
            wellfound:<span className="text-red-500">ai</span>
          </h1>
          {/* You might add a brief description or copyright info here */}
        </div>

        {/* For Candidates */}
        <div>
          <h6 className="font-semibold text-lg mb-4">For Candidates</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Startup Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Web3 Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Featured
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Salary Calculator
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Startup Hiring Data
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Tech Startups
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Remote
              </a>
            </li>
          </ul>
        </div>

        {/* For Recruiters */}
        <div>
          <h6 className="font-semibold text-lg mb-4">For Recruiters</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Overview
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Recruit Pro
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Curated
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                wellfound.ai
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Hire Developers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Pricing
              </a>
            </li>
            {/* Add more recruiter links if needed */}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-semibold text-lg mb-4">Company</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms &amp; Risks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Privacy &amp; Cookies
              </a>
            </li>
            {/* Add more company links if needed */}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-gray-400 text-sm">
        {/* Add copyright information here */}
        &copy; {new Date().getFullYear()} Wellfound. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;