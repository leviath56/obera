"use client";

import React, { useState } from "react";

const Toolbar: React.FC = () => {
  const [mode, setMode] = useState<"code" | "preview">("code");

  return (
    <div className="flex justify-between items-start p-4 bg-white border-b border-gray-200">
    

      {/* Top Right Buttons */}
      <div className="flex items-start space-x-2">
        {/* Icons */}
        <div className="flex space-x-2 mt-1">
          <button className="p-2 rounded-full hover:bg-gray-100 border">
            ↺
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 border">
            ⟳
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 border">
            ▶
          </button>
        </div>




      </div>
    </div>
  );
};

export default Toolbar;
