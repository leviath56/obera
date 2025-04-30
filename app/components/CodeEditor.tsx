import React from "react";

const CodeEditor: React.FC = () => {
  const codeLines = [
    `export default function Home() {`,
    `  return (`,
    `    <div className="flex h-screen">`,
    `      {/* Sidebar */}`,
    `      <div className="w-1/5 bg-[#1E2527] text-gray-300 p-3">`,
    `        <h1 className="text-sm font-semibold mb-3 text-blue-400">OBERA</h1>`,
    `        <div className="space-y-1 text-sm">`,
    `          <div className="flex items-center space-x-2">`,
    `            <span className="text-yellow-500">📁</span>`,
    `            <span>obera</span>`,
    `          </div>`,
    `          <div className="ml-4 space-y-1">`,
    `            <div className="flex items-center space-x-2">`,
    `              <span className="text-red-500">📁</span>`,
    `              <span className="text-blue-400">app</span>`,
    `            </div>`,
    `            <div className="ml-4 flex items-center space-x-2">`,
    `              <span className="text-blue-400">📄</span>`,
    `              <span>globals.css</span>`,
    `            </div>`,
    `            <div className="ml-4 flex items-center space-x-2">`,
    `              <span className="text-blue-400">📄</span>`,
    `              <span>layout.tsx</span>`,
    `            </div>`,
    `            <div className="ml-4 flex items-center space-x-2">`,
    `              <span className="text-blue-400">📄</span>`,
    `              <span className="bg-[#2F3B3D] px-1 rounded">page.tsx</span>`,
    `            </div>`,
    `          </div>`,
    `          <div className="flex items-center space-x-2">`,
    `            <span className="text-red-500">📄</span>`,
    `            <span>.gitignore</span>`,
    `          </div>`,
    `          <div className="flex items-center space-x-2">`,
    `            <span className="text-blue-400">📄</span>`,
    `            <span>next.config.ts</span>`,
    `          </div>`,
    `          <div className="flex items-center space-x-2">`,
    `            <span className="text-green-500">📄</span>`,
    `            <span>package-lock.json</span>`,
    `          </div>`,
    `          <div className="flex items-center space-x-2">`,
    `            <span className="text-green-500">📄</span>`,
    `            <span>package.json</span>`,
    `          </div>`,
    `          <div className="flex items-center space-x-2">`,
    `            <span className="text-red-500">📄</span>`,
    `            <span>postcss.config.mjs</span>`,
    `          </div>`,
    `          <div className="flex items-center space-x-2">`,
    `            <span className="text-blue-400">📄</span>`,
    `            <span>README.md</span>`,
    `          </div>`,
    `          <div className="flex items-center space-x-2">`,
    `            <span className="text-blue-400">📄</span>`,
    `            <span>tsconfig.json</span>`,
    `          </div>`,
    `        </div>`,
    `      </div>`,
    `      {/* Main Content */}`,
    `      <div className="w-4/5 flex flex-col">`,
    `        {/* Toolbar */}`,
    `        <div className="bg-[#1E2527] p-2 flex justify-between items-center border-b border-gray-700">`,
    `          <div className="flex space-x-1">`,
    `            <button className="p-1 bg-gray-600 rounded hover:bg-gray-500">`,
    `              <span className="text-gray-300">⟳</span>`,
    `            </button>`,
    `            <button className="p-1 bg-gray-600 rounded hover:bg-gray-500">`,
    `              <span className="text-gray-300">↺</span>`,
    `            </button>`,
    `            <button className="p-1 bg-gray-600 rounded hover:bg-gray-500">`,
    `              <span className="text-gray-300">▶</span>`,
    `            </button>`,
    `          </div>`,
    `          <div className="flex space-x-2">`,
    `            <button className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-500 text-gray-300">`,
    `              Code`,
    `            </button>`,
    `            <button className="px-3 py-1 bg-gray-700 rounded text-gray-100 font-semibold">`,
    `              Preview`,
    `            </button>`,
    `            <div className="flex space-x-2">`,
    `              <button className="p-1 bg-gray-600 rounded hover:bg-gray-500 flex items-center text-gray-300">`,
    `                <span className="mr-1">📋</span> Copy code`,
    `              </button>`,
    `              <button className="p-1 bg-gray-600 rounded hover:bg-gray-500 flex items-center text-gray-300">`,
    `                <span className="mr-1">💾</span> Export`,
    `              </button>`,
    `            </div>`,
    `          </div>`,
    `        </div>`,
    `        {/* Content Area */}`,
    `        <div className="flex-1 bg-gray-300"></div>`,
    `      </div>`,
    `    </div>`,
    `  );`,
    `}`,
  ];

  return (
    <div className="flex-1 bg-[#1E2527] text-gray-300 font-mono text-sm">
      <div className="flex">
        {/* Line Numbers */}
        <div className="w-10 bg-[#252B2D] text-gray-500 text-right pr-2 py-2 border-r border-gray-700">
          {codeLines.map((_, index) => (
            <div key={index} className="leading-5">
              {index + 1}
            </div>
          ))}
        </div>
        {/* Code Content */}
        <div className="flex-1 p-2 overflow-auto">
          {codeLines.map((line, index) => (
            <div key={index} className="leading-5">
              <span>
                {line.split(/(\s+)/).map((part, i) => {
                  if (part.match(/^\s+$/)) return part; // Spaces
                  if (
                    part.match(
                      /^(export|default|function|return|div|span|button)$/
                    )
                  ) {
                    return (
                      <span key={i} className="text-purple-400">
                        {part}
                      </span>
                    );
                  }
                  if (part.match(/^className=/)) {
                    return (
                      <span key={i} className="text-yellow-400">
                        {part}
                      </span>
                    );
                  }
                  if (part.match(/"[^"]*"/)) {
                    return (
                      <span key={i} className="text-green-400">
                        {part}
                      </span>
                    );
                  }
                  if (part.match(/^{|}$|^\(|^\)$/)) {
                    return (
                      <span key={i} className="text-gray-400">
                        {part}
                      </span>
                    );
                  }
                  if (part.match(/^\/\*.*\*\/$/)) {
                    return (
                      <span key={i} className="text-gray-500">
                        {part}
                      </span>
                    );
                  }
                  return <span key={i}>{part}</span>;
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
