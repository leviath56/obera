"use client";

import React, { useState } from "react";
import { useEditor } from "../contexts/EditorContext";
import { Copy, Download, MoreVertical } from "lucide-react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { copyToClipboard, exportCode } = useEditor();

  return (
    <div className="relative">
      {/* Three-dot button with circular hover effect */}
      <button
        className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 group"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="More options"
      >
        <MoreVertical className="w-5 h-5 text-gray-600 group-hover:text-gray-800" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-200 overflow-hidden">
          {/* Copy button with black text */}
          <button
            className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-black hover:bg-gray-100 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
            onClick={() => {
              copyToClipboard();
              setIsOpen(false);
            }}
          >
            <div className="p-1.5 rounded-full bg-gray-100">
              <Copy className="w-4 h-4 text-gray-700" />
            </div>
            <span>Copy Code</span>
          </button>
          
          {/* Export button with black text */}
          <button
            className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-black hover:bg-gray-100 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
            onClick={() => {
              exportCode();
              setIsOpen(false);
            }}
          >
            <div className="p-1.5 rounded-full bg-gray-100">
              <Download className="w-4 h-4 text-gray-700" />
            </div>
            <span>Export</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;