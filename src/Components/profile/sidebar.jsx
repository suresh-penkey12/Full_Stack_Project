// components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  Briefcase,
  ClipboardList,
} from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { name: "Home", icon: <Home size={20} />, path: "/" },
    { name: "Profile", icon: <User size={20} />, path: "/profile" },
    { name: "Jobs", icon: <Briefcase size={20} />, path: "/jobs" },
    { name: "Applied", icon: <ClipboardList size={20} />, path: "/applied" },
  ];

  return (
    <div className="w-20 md:w-24 bg-white border-r h-screen fixed flex flex-col items-center pt-4">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center text-xs mt-6 ${
              isActive ? "text-blue-600 font-semibold" : "text-gray-500"
            }`
          }
        >
          {item.icon}
          <span className="mt-1 hidden md:block">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
