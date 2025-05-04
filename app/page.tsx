import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-white gap-4 p-4">
      {/* Left Panel - Narrower (30%) and shorter (90% height) */}
      <div className="w-[30%] h-[90%] self-center"> {/* Centered vertically */}
        <LeftPanel />
      </div>
      
      {/* Right Panel - Wider (70%) and full height */}
      <div className="w-[70%] h-full">
        <RightPanel />
      </div>
    </div>
  );
}