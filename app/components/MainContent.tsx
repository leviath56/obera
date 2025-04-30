"use client";

import React, { useState } from "react";

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Code" | "Preview">("Code");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-start p-2 space-x-4 relative items-center">
        {/* Toggle Switch */}
        <div className="bg-gray-200 rounded-full p-1 flex">
          <button
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
              activeTab === "Code"
                ? "bg-white shadow text-gray-800"
                : "text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("Code")}
          >
            Code
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
              activeTab === "Preview"
                ? "bg-white shadow text-gray-800"
                : "text-gray-600 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("Preview")}
          >
            Preview
          </button>
        </div>

        {/* Dropdown: Copy code / Export */}
        <div className="relative">
          <button
            className="px-2 py-1 rounded-md bg-gray-100 text-xl"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            ⋮
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-10">
              <button
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                onClick={() => {
                  setIsDropdownOpen(false);
                  // Copy code logic here
                }}
              >
                Copy code
              </button>
              <button
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                onClick={() => {
                  setIsDropdownOpen(false);
                  // Export logic here
                }}
              >
                Export
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1">
        {activeTab === "Code" ? (
          <textarea
            className="w-full h-full rounded-lg p-3 resize-none shadow-sm focus:outline-none"
            placeholder="Generated code will appear here..."
            readOnly
          />
        ) : (
          <div className="w-full h-full rounded-lg p-3 shadow-sm">
            {/* Preview content goes here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
