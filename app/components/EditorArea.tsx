"use client";

import { useEditor } from "../contexts/EditorContext";
import { editorButtons } from "../constants/EditorButtons";

export const EditorArea = () => {
    const { grammar, setGrammar, generateCode, isLoading } = useEditor();

    const handleCopy = () => {
        navigator.clipboard.writeText(grammar);
    };

    const buttons = editorButtons(isLoading, generateCode, handleCopy);

    return (
        <div>
            {/* Button Row */}
            <div className="flex justify-end items-center px-4 py-2 space-x-2">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        onClick={button.onClick}
                        disabled={button.disabled}
                        className={button.className}
                        title={button.title}
                    >
                        {button.icon}
                    </button>
                ))}
            </div>

            {/* Text Area - Changed bg-gray-200 to bg-[#D9D9D9] */}
            <textarea
                className="h-[800px] w-full p-4 font-mono text-sm resize-none focus:outline-none bg-[#D9D9D9] text-gray-800 rounded-md"
                placeholder="Enter ANTLR4 grammar..."
                value={grammar}
                onChange={(e) => setGrammar(e.target.value)}
            />
        </div>
    );
};