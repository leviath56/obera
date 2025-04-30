"use client";

import React, { useState } from "react";

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Code");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-start p-2 space-x-2 relative">
        {" "}
        {/* Thay 'justify-end' bằng 'justify-start' */}
        {/* Tabs: Code and Preview */}
        <div className="flex space-x-1">
          <button
            className={`px-3 py-1 rounded-md ${
              activeTab === "Code" ? "bg-gray-200" : "bg-gray-100"
            }`}
            onClick={() => setActiveTab("Code")}
          >
            Code
          </button>
          <button
            className={`px-3 py-1 rounded-md ${
              activeTab === "Preview" ? "bg-gray-200" : "bg-gray-100"
            }`}
            onClick={() => setActiveTab("Preview")}
          >
            Preview
          </button>
        </div>
        {/* Dropdown: Copy code and Export */}
        <div>
          <button
            className="px-2 py-1 rounded-md bg-gray-100"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            ⋮
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-10">
              <button
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                Copy code
              </button>
              <button
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                Export
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1">
        {activeTab === "Code" ? (
          <textarea
            className="w-full h-full rounded-lg p-3 resize-none shadow-sm focus:outline-none"
            placeholder="Generated code will appear here..."
            readOnly
          />
        ) : (
          <div className="w-full h-full rounded-lg p-3 shadow-sm">
            {/* Nội dung Preview sẽ hiển thị ở đây */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
