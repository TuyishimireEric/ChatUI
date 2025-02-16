import React from "react";
import { Search } from "lucide-react";

const ChatList = () => {
  return (
    <div className="w-80 border-r border-gray-800 ">
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 rounded-lg pl-10 pr-4 py-2 text-gray-200"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      <div className="px-4">
        <div className="text-sm text-gray-400 mb-4">Today</div>
        {["Colleen", "Max", "Soham", "Kristin", "Eduardo"].map((name) => (
          <div
            key={name}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gray-700" />
            <div>
              <div className="text-gray-200">{name}</div>
              <div className="text-sm text-gray-400">
                As-salamu alaykum, Leslie!
              </div>
            </div>
            <div className="ml-auto text-xs text-gray-400">03:54 PM</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
