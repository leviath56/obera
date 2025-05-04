"use client";

import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import DropdownMenu from "./DropdownMenu";
import CodePreview from "./CodePreview";
import { useEditor } from "../contexts/EditorContext";

const RightPanel = () => {
  const { activeTab, generatedCode } = useEditor();

  return (
    <div className="h-full flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden border-2 border-gray-300"> 
      {/* Header with controls */}
      <div className="p-2 bg-gray-50 flex items-center justify-between">
        <div className="flex-1 flex justify-center">
          <ToggleSwitch />
        </div>
        <div className="hover:bg-gray-100 rounded-full transition-colors duration-200">
          <DropdownMenu />
        </div>
      </div>     
      {/* Content area */}
      <CodePreview />
      </div>
  );
};

export default RightPanel;