"use client";

import React from "react";
import { Play, Redo, Copy, HelpCircle, Edit } from "lucide-react";
import { Header } from "./Header";
import { EditorArea } from "./EditorArea";

const LeftPanel = () => {

  return (
    <div className="h-full flex flex-col">
      <Header />
      <EditorArea />
    </div>
  );
};

export default LeftPanel;