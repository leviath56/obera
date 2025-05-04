"use client";

import React, { useState } from "react";
import { useEditor } from "../contexts/EditorContext";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { copyToClipboard, exportCode } = useEditor();

  return (
    <div className="relative">
      <button
        className="p-2 rounded-md hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        ⋮
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              copyToClipboard();
              setIsOpen(false);
            }}
          >
            📋 Copy Code
          </button>
          <button
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              exportCode();
              setIsOpen(false);
            }}
          >
            💾 Export
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;