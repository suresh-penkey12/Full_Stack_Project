import React from 'react';

const BlogSectionExpanded = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">From the blog</h2>
        <button className="text-lg text-gray-600 hover:text-gray-800 focus:outline-none">
          More posts
        </button>
      </div>

      <ul className="space-y-6">
        {/* First Blog Post */}
        <li>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-8 py-6 flex items-center justify-between">
              <div className="flex-grow">
                <p className="text-lg text-gray-500 font-medium mb-2">Blog Post</p>
                <h3 className="text-2xl font-semibold text-gray-900">
                  Why Naval Ravikant Thinks Remote Work Is The Future
                </h3>
                <p className="text-gray-700 text-lg mt-2">
                  It feels like the rise of remote work has been a top conversation in
                  tech for years, but despite the enthusiasm and attention...
                </p>
              </div>
              <div className="ml-6">
                <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>

        {/* Second Blog Post */}
        <li>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-8 py-6 flex items-center justify-between">
              <div className="flex-grow">
                <p className="text-lg text-gray-500 font-medium mb-2">Blog Post</p>
                <h3 className="text-2xl font-semibold text-gray-900">
                  The Truth About Finding Your First Engineering Job
                </h3>
                <p className="text-gray-700 text-lg mt-2">
                  Even for senior engineers, job searches can be confusing, frustrating
                  affairs. When you're a junior engineer looking for your first job...
                </p>
              </div>
              <div className="ml-6">
                <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>

        {/* Job Collection */}
        <li>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-8 py-6 flex items-center justify-between">
              <div className="flex-grow">
                <p className="text-lg text-gray-500 font-medium mb-2">Job Collection</p>
                <h3 className="text-2xl font-semibold text-gray-900">
                  20 Women-Led Startups Expanding Their Remote Teams in 2022
                </h3>
                <p className="text-gray-700 text-lg mt-2">
                  It is no surprise by now that women make great leaders. In the US
                  alone, women-led businesses generated more than 1.8 trillion
                  dollars...
                </p>
              </div>
              <div className="ml-6">
                <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default BlogSectionExpanded;