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
