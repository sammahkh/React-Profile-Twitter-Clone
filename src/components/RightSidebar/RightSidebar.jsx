import WhoToFollow from "../MainProfileSection/WhoToFollow/WhoToFollow";
import Footer from "./Footer/Footer";
import "./RightSidebar.css";
import SearchBar from "./SearchBar/SearchBar";
import Trends from "./Trends/Trends";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <SearchBar />
      <div className="to-follow-contaier">
        <WhoToFollow minimal={true} />
      </div>
      <Trends />
      <Footer />
    </div>
  );
};

export default RightSidebar;
