"use client";

import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import DropdownMenu from "./DropdownMenu";
import CodePreview from "./CodePreview";
import { useEditor } from "../contexts/EditorContext";

const RightPanel = () => {
  const { activeTab, generatedCode } = useEditor();

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header with centered toggle and right dropdown */}
      <div className="p-2 bg-gray-50 flex items-center justify-between">
        <div className="flex-1 flex justify-center">
          <ToggleSwitch />
        </div>
        <DropdownMenu />
      </div>
      
      {/* Expanded content area */}
      <CodePreview />
      
      {/* Status bar */}
      <div className="px-3 py-1 bg-gray-50 text-xs text-gray-500">
        {activeTab === "code"
          ? `${generatedCode.split('\n').length} lines of generated code`
          : "HTML Preview"}
      </div>
    </div>
  );
};

export default RightPanel;