"use client";

import React, { useState } from "react";

const MainContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Code" | "Preview">("Code");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [codeContent, setCodeContent] = useState(
    "Generated code will appear here..."
  );

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeContent).then(() => {
      setIsDropdownOpen(false);
      alert("Code copied to clipboard!");
    });
  };

  const handleExport = () => {
    // Placeholder for export logic
    setIsDropdownOpen(false);
    alert("Export functionality to be implemented!");
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center p-2">
        {/* Toggle Switch - Centered */}
        <div className="flex-1 flex justify-center">
          <div className="bg-gray-300 rounded-full p-1 flex space-x-1">
            <button
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                activeTab === "Code"
                  ? "bg-gray-100 shadow text-gray-800"
                  : "text-gray-600 hover:bg-gray-400"
              }`}
              onClick={() => setActiveTab("Code")}
            >
              Code
            </button>
            <button
              className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                activeTab === "Preview"
                  ? "bg-gray-100 shadow text-gray-800"
                  : "text-gray-600 hover:bg-gray-400"
              }`}
              onClick={() => setActiveTab("Preview")}
            >
              Preview
            </button>
          </div>
        </div>

        {/* Dropdown: Copy code / Export - Right Aligned */}
        <div className="relative">
          <button
            className="px-2 py-1 rounded-md bg-gray-100 text-xl"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            ⋮
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white border rounded-md shadow-lg z-10">
              <button
                className="flex items-center w-full text-left px-3 py-2 hover:bg-gray-100"
                onClick={handleCopyCode}
              >
                <i className="fas fa-copy mr-2"></i>
                Copy code
              </button>
              <button
                className="flex items-center w-full text-left px-3 py-2 hover:bg-gray-100"
                onClick={handleExport}
              >
                <i className="fas fa-download mr-2"></i>
                Export
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex items-center justify-center">
        {activeTab === "Code" ? (
          <textarea
            className="w-full h-full rounded-xl p-3 resize-none shadow-sm focus:outline-none"
            value={codeContent}
            onChange={(e) => setCodeContent(e.target.value)}
            placeholder="Generated code will appear here..."
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-xl p-3 shadow-sm bg-white text-center">
            {codeContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
