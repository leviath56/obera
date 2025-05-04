"use client";

import React from "react";
import { useEditor } from "../contexts/EditorContext";

const LeftPanel = () => {
  const { grammar, setGrammar, generateCode, isLoading } = useEditor();

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      {/* Compact Header */}
      <div className="p-3 bg-gray-50 flex items-center justify-between">
        <h1 className="text-lg font-bold text-gray-800">OBERA</h1>
        <button
          onClick={generateCode}
          disabled={isLoading}
          className={`px-3 py-1 text-sm rounded ${
            isLoading ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {isLoading ? "Processing..." : "Run"}
        </button>
      </div>
      
      {/* Grammar Input - Will adapt to container height */}
      <textarea
        className="flex-1 p-3 font-mono text-sm resize-none focus:outline-none"
        placeholder="Enter ANTLR4 grammar..."
        value={grammar}
        onChange={(e) => setGrammar(e.target.value)}
      />
    </div>
  );
};

export default LeftPanel;