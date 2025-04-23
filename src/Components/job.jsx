import React from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Hand,
  Star,
} from 'lucide-react'; // ✅ Make sure you have lucide-react installed

const JobRecruiterLoveSection = () => {
  const jobSeekers = [
    {
      icon: <ArrowUpRight className="w-5 h-5" />,
      text: "Connect directly with founders at top startups - no third party recruiters allowed.",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "Everything you need to know, all upfront. View salary, stock options, and more before applying.",
    },
    {
      icon: <Hand className="w-5 h-5" />,
      text: "Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.",
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Unique jobs at startups and tech companies you can’t find anywhere else.",
    },
  ];

  const recruiters = [
    {
      icon: <ArrowUpRight className="w-5 h-5" />,
      text: "Tap into a community of 10M+ engaged, startup-ready candidates.",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "Everything you need to kickstart your recruiting — set up job posts, company branding, and HR tools within 10 minutes, all for free.",
    },
    {
      icon: <Hand className="w-5 h-5" />,
      text: "A free applicant tracking system, or free integration with any ATS you may already use.",
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Let us handle the heavy-lifting with RecruiterCloud. Our new AI-Recruiter scans 500M+ candidates, filters it down based on your unique calibration, and schedules your favorites on your calendar in a matter of days.",
    },
  ];

  const Card = ({ title, items, bg }) => (
    <div data-aos="fade-up-left" className={`${bg} p-6 rounded-lg flex-1`}>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <ul className="space-y-6">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <div className="min-w-[40px] min-h-[40px] rounded-full bg-red-100 flex items-center justify-center text-red-600">
              {item.icon}
            </div>
            <p className="text-sm sm:text-base text-gray-800">{item.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex gap-4 flex-wrap">
        <button className="px-5 py-2 rounded-full border">Learn more</button>
        <button className="px-5 py-2 rounded-full bg-black text-white">Sign up</button>
      </div>
    </div>
  );

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card title="Why job seekers love us" items={jobSeekers} bg="bg-white" />
        <Card title="Why recruiters love us" items={recruiters} bg="bg-pink-50" />
      </div>
    </section>
  );
};

export default JobRecruiterLoveSection;
