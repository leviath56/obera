import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 bg-gray-200 p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-xl font-bold text-black">OBERA</h1>

        <div className="flex flex-col items-end">
          <button className="p-2 rounded-full hover:bg-gray-100 border mb-1">
            ?
          </button>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full hover:bg-gray-100 border">
              ↺
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 border">
              ⟳
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 border">
              ▶
            </button>
          </div>
        </div>
      </div>
      <textarea
        className="w-full flex-1 rounded-lg p-3 resize-none shadow-sm focus:outline-none"
        placeholder="Enter your DSL code here..."
      />
    </div>
  );
};

export default Sidebar;
