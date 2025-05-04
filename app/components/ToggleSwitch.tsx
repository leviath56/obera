"use client";

import React from "react";
import { useEditor } from "../contexts/EditorContext";

const ToggleSwitch = () => {
  const { activeTab, setActiveTab } = useEditor();

  return (
    <div className="bg-gray-200 rounded-full p-1 flex shadow-inner">
      <button
        className={`px-6 py-1 rounded-full text-sm font-medium transition ${
          activeTab === "code"
            ? "bg-white shadow-sm text-gray-800"
            : "text-gray-600 hover:bg-gray-300"
        }`}
        onClick={() => setActiveTab("code")}
      >
        Code
      </button>
      <button
        className={`px-6 py-1 rounded-full text-sm font-medium transition ${
          activeTab === "preview"
            ? "bg-white shadow-sm text-gray-800"
            : "text-gray-600 hover:bg-gray-300"
        }`}
        onClick={() => setActiveTab("preview")}
      >
        Preview
      </button>
    </div>
  );
};

export default ToggleSwitch;