import React from "react";
import { Home, Users, MessageSquare, Apple } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white p-4 border border-gray-800 mt- flex flex-col rounded-md ">
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-4">KCHAT</h1>
        <button className="w-full bg-gray-800 rounded-lg p-2 text-left mb-4">
          + New Chat
        </button>
      </div>

      <nav className="flex-1">
        <div className="space-y-2">
          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800"
          >
            <Home size={20} />
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800"
          >
            <Users size={20} />
            <span>Invitation</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800 bg-gray-800"
          >
            <MessageSquare size={20} />
            <span>Message</span>
          </a>
        </div>
      </nav>

      <div className="mt-auto space-y-4">
        <button className="w-full bg-gray-800 rounded-lg p-3 flex items-center justify-center space-x-2">
          <Apple size={20} />
          <span>Download on the App Store</span>
        </button>

        <div className="bg-gray-800 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Go to Pro</h2>
          <p className="text-sm text-gray-400 mb-3">
            Try your experience for using more features
          </p>
          <button className="w-full bg-gray-700 rounded-lg p-2">
            ↗ Upgrade Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
