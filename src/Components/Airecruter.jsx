import React from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const candidates = [
  {
    name: "Joshua Moret",
    interested: true,
    experience: "PYTHON",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Naomi Liu",
    interested: true,
    experience: "PYTHON",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Guy Leonardo",
    interested: true,
    experience: "PYTHON",
    avatar: "https://i.pravatar.cc/150?img=34",
  },
];

export default function WellfoundAIUI() {
  return (
    <div className="flex min-h-screen bg-[#220d27] text-white font-sans">
      {/* Left Section */}
      <div className="w-1/2 p-16">
        <div className="inline-block px-4 py-1 bg-pink-500 text-white rounded-full text-sm font-semibold mb-4">
          Early Access
        </div>
        <h1 className="text-5xl font-bold mb-4">Meet wellfound:ai</h1>
        <h2 className="text-4xl font-bold mb-6">Wellfound's AI recruiter.</h2>
        <p className="text-lg mb-4">
          Here to help with all the logistics. wellfound:ai finds best fit candidates,
          vets for interest, and schedules your favorites on your calendar — all in a
          matter of days.
        </p>
        <p className="italic text-lg mb-6">It’s that easy.</p>
        <button className="bg-white text-black px-6 py-2 rounded-xl font-semibold">
          Learn more
        </button>
      </div>

      {/* Center Divider */}
      <div className="flex flex-col items-center justify-center px-2">
        <div className="h-full border-l border-dashed border-pink-400"></div>
        <div className="mt-[-2rem] text-pink-400 font-bold">📱<br />Review</div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 p-12 relative">
        {/* Chat bubbles */}
        <div className="flex items-start mb-4">
          <img src="https://i.pravatar.cc/150?img=5" className="w-10 h-10 rounded-full mr-3" alt="avatar" />
          <div className="bg-white text-black px-4 py-2 rounded-xl max-w-sm">
            Send me candidates interested in <span className="bg-yellow-100 px-2 py-0.5 rounded-md font-bold">FINTECH</span> with experience in <span className="bg-gray-200 px-2 py-0.5 rounded-md font-bold">PYTHON</span>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <div className="bg-pink-500 text-white px-4 py-2 rounded-xl max-w-sm">
            Absolutely! Sending you a list of relevant candidates now.
          </div>
        </div>

        {/* Avatars scrolling */}
        <div className="flex space-x-3 mb-4">
          {[10, 11, 12, 13, 14, 15, 16].map((id) => (
            <img key={id} src={`https://i.pravatar.cc/150?img=${id}`} className="w-10 h-10 rounded-full" alt="avatar" />
          ))}
          <span className="text-pink-300 ml-2 self-center">searching...</span>
        </div>

        {/* Candidate Review List */}
        <div className="bg-white text-black rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-pink-900 mb-4">Your qualified candidate review list</h3>
          {candidates.map((candidate, idx) => (
            <div key={idx} className="flex items-center justify-between bg-white rounded-xl p-4 mb-3 shadow-md">
              <div className="flex items-center">
                <img src={candidate.avatar} className="w-10 h-10 rounded-full mr-4" alt="avatar" />
                <div>
                  <div className="font-bold">{candidate.name}</div>
                  <div className="text-sm">Experience in <span className="bg-gray-200 px-2 py-0.5 rounded-md font-semibold">{candidate.experience}</span></div>
                </div>
              </div>
              <div className="flex space-x-3">
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md text-xs font-bold">INTERESTED</span>
                <CheckCircleIcon className="w-6 h-6 text-green-500 cursor-pointer" />
                <XCircleIcon className="w-6 h-6 text-red-400 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
