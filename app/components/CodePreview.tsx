"use client";

import React from "react";
import { useEditor } from "../contexts/EditorContext";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CodePreview = () => {
  const { activeTab, generatedCode, previewHtml, isLoading } = useEditor();

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-500">
          Processing...
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-auto">
      {activeTab === "code" ? (
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{
            margin: 0,
            padding: '1rem',
            height: '100%',
            fontSize: '0.875rem',
            backgroundColor: '#f8fafc' // Slight off-white background
          }}
          showLineNumbers={true}
        >
          {generatedCode || "// Generated code will appear here"}
        </SyntaxHighlighter>
      ) : (
        <div className="h-full p-4 bg-gray-50">
          {previewHtml ? (
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Preview will appear here
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodePreview;