"use client";

import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const EditorLayout = () => {
  return (
    <div className="flex h-screen bg-white">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default EditorLayout;