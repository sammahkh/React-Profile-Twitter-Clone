import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import MainProfileSection from "./components/MainProfileSection/MainProfileSection";
import RightSidebar from "./components/RightSidebar/RightSidebar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <LeftSidebar />
      <MainProfileSection />
      <RightSidebar />
    </div>
  );
};

export default App;
