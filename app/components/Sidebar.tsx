import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/4 bg-gray-200 p-4 h-full flex flex-col">
      <h1 className="text-xl font-bold text-black mb-3">OBERA</h1>
      <textarea
        className="w-full flex-1 rounded-lg p-3 resize-none shadow-sm focus:outline-none"
        placeholder="Enter your DSL code here..."
      />
    </div>
  );
};

export default Sidebar;
