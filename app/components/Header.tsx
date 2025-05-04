import { HelpCircle } from "lucide-react";
export const Header = () => {
    const handleHelpClick = () => {
    };
    return (
        <header className="flex items-center justify-between p-4">
            <h1 className="text-2xl font-cutive tracking-wider text-blue-900">OBERA</h1>
            <button
                onClick={handleHelpClick}
                className="text-gray-500 hover:text-gray-800"
                title="About this tool"
            >
                <HelpCircle className="w-6 h-6" />
            </button>
        </header>
    );
}