// src/constants/editorButtons.ts
import { Play, Redo, Copy } from "lucide-react";

export const editorButtons = (isLoading: boolean, generateCode: () => void, handleCopy: () => void) => [
  {
    icon: isLoading ? <span className="animate-pulse">...</span> : <Play className="w-4 h-4" />,
    onClick: generateCode,
    disabled: isLoading,
    title: isLoading ? "Processing..." : "Run",
    className: "p-2 text-gray-600 hover:text-gray-800"
  },
  {
    icon: <Redo className="w-4 h-4" />,
    onClick: generateCode,
    disabled: isLoading,
    title: "Redo",
    className: "p-2 text-gray-600 hover:text-gray-800"
  },
  {
    icon: <Copy className="w-4 h-4" />,
    onClick: handleCopy,
    title: "Copy",
    className: "p-2 text-gray-600 hover:text-gray-800"
  }
];