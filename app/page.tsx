import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-3/4 bg-white">
        <MainContent />
      </div>
    </div>
  );
}
