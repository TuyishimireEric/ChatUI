import React from "react";
import { Paperclip, Mic, Send } from "lucide-react";

const ChatWindow = () => {
  return (
    <div className="flex-1 flex flex-col ">
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-gray-700" />
          <div>
            <h2 className="text-lg font-semibold text-gray-200">
              Collen Mosses
            </h2>
            <p className="text-sm text-gray-400">
              Nix, your gamer boyfriend...
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl bg-gray-800 rounded-lg p-4 mb-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-gray-700" />
            <div>
              <span className="text-gray-200">Collen</span>
              <span className="text-gray-400 text-sm ml-2">
                Sunday 11:40 am
              </span>
            </div>
          </div>
          <p className="text-gray-200">
            Nix, your gamer boyfriend, had been streaming in his room. His cam
            was off but still his mic was on. He had hundreds of thousands of
            people watching him. Nix heard you enter his room, lifting his arms
            as you sat in his lap.
          </p>
        </div>
      </div>

      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Type here..."
              className="w-full bg-gray-800 rounded-lg pl-4 pr-12 py-3 text-gray-200"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <button className="text-gray-400 hover:text-gray-200">
                <Paperclip size={20} />
              </button>
              <button className="text-gray-400 hover:text-gray-200">
                <Mic size={20} />
              </button>
            </div>
          </div>
          <button className="bg-blue-600 p-3 rounded-lg">
            <Send size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatWindow;
