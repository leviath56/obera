"use client";

import React, { createContext, useState, useContext } from "react";

interface EditorState {
  grammar: string;
  generatedCode: string;
  previewHtml: string;
  activeTab: "code" | "preview";
  isLoading: boolean;
  error: string | null;
}

interface EditorActions {
  setGrammar: (grammar: string) => void;
  generateCode: () => Promise<void>;
  setActiveTab: (tab: "code" | "preview") => void;
  copyToClipboard: () => void;
  exportCode: () => void;
}

const EditorContext = createContext<(EditorState & EditorActions) | null>(null);

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<EditorState>({
    grammar: "",
    generatedCode: "",
    previewHtml: "",
    activeTab: "preview",
    isLoading: false,
    error: null,
  });

  const generateCode = async () => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    try {
      // TODO: Replace with actual ANTLR4 processing
      // This is a mock implementation
      const { code, html } = await processGrammar(state.grammar);
      setState((prev) => ({
        ...prev,
        generatedCode: code,
        previewHtml: html,
        isLoading: false,
      }));
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: err instanceof Error ? err.message : "Failed to process grammar",
        isLoading: false,
      }));
    }
  };

  const processGrammar = async (grammar: string) => {
    // Mock processing - replace with actual ANTLR4 logic
    return new Promise<{ code: string; html: string }>((resolve) => {
      setTimeout(() => {
        resolve({
          code: `// Generated code from:\n${grammar}`,
          html: `<div>Preview of ${grammar.split("\n")[0] || "your grammar"}</div>`,
        });
      }, 1000);
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(state.generatedCode);
  };

  const exportCode = () => {
    const blob = new Blob([state.generatedCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "generated-code.txt";
    a.click();
  };

  return (
    <EditorContext.Provider
      value={{
        ...state,
        setGrammar: (grammar) => setState((prev) => ({ ...prev, grammar })),
        generateCode,
        setActiveTab: (activeTab) => setState((prev) => ({ ...prev, activeTab })),
        copyToClipboard,
        exportCode,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
};