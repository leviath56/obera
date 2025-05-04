import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-white gap-4 p-4">
      {/* Left Panel - Smaller width (30%) */}
      <div className="w-[30%] h-full">
        <LeftPanel />
      </div>
      
      {/* Right Panel - Larger width (70%) */}
      <div className="w-[70%] h-full">
        <RightPanel />
      </div>
    </div>
  );
}