import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Toolbar from './components/Toolbar';

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Toolbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="w-3/4 bg-white">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

