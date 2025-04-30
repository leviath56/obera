import React from "react";

const Toolbar: React.FC = () => {
  return (
    <div className="bg-white p-2 flex justify-between items-center border-b border-gray-200">
      <div className="flex space-x-1">
        <button className="p-1 bg-gray-100 rounded hover:bg-gray-200">
          <span className="text-gray-600">⟳</span>
        </button>
        <button className="p-1 bg-gray-100 rounded hover:bg-gray-200">
          <span className="text-gray-600">↺</span>
        </button>
        <button className="p-1 bg-gray-100 rounded hover:bg-gray-200">
          <span className="text-gray-600">▶</span>
        </button>
      </div>
      <div className="flex space-x-2">
        <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-gray-600">
          Code
        </button>
        <button className="px-3 py-1 bg-gray-300 rounded text-gray-800 font-semibold">
          Preview
        </button>
        <div className="flex space-x-2">
          <button className="p-1 bg-gray-100 rounded hover:bg-gray-200 flex items-center text-gray-600">
            <span className="mr-1">📋</span> Copy code
          </button>
          <button className="p-1 bg-gray-100 rounded hover:bg-gray-200 flex items-center text-gray-600">
            <span className="mr-1">💾</span> Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
