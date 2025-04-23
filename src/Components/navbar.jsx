import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    {/* Static Navbar */}
    <div  data-aos="fade-down" className="flex justify-between items-center py-6 px-10 bg-white sticky top-0 z-20 shadow-sm">
    <div className="text-2xl font-bold text-black">
      <span className="text-[#111]">well</span><span className="text-[#f43f5e]">found:</span>
    </div>
    <div className="flex gap-6 text-sm font-medium text-gray-700">
      <Link to="/discover">Discover</Link>
      <Link to="/jobs">For Job Seekers</Link>
      <Link to="/recruiting">For Companies</Link>
    </div>
    <div className="flex gap-4">
      <button className="px-4 py-2 border rounded-full font-medium hover:bg-gray-100">Log In</button>
      <button className="px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800">Sign Up</button>
    </div>
  </div>
  </>
  )
}

export default Navbar