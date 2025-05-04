<<<<<<< HEAD
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
=======
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="w-3/4 bg-white">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
>>>>>>> 06bf6a31a2064c694132d5daaeaf7ef9c273914b
