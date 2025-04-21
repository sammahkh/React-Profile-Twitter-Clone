import NavItem from "./NavItem/NavItem";
import {
  FiHome,
  FiSearch,
  FiBell,
  FiMail,
  FiBookmark,
  FiUser,
  FiMoreHorizontal,
} from "react-icons/fi";
import { BsCardList } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";
import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <div className="wrapper">
        {" "}
        <div className="logo">
          <FaTwitter className="twitter-icon" />
        </div>
        <nav className="nav-links">
          <ul>
            <NavItem icon={<FiHome />} label="Home" />
            <NavItem icon={<FiSearch />} label="Explore" />
            <NavItem icon={<FiBell />} label="Notifications" />
            <NavItem icon={<FiMail />} label="Messages" />
            <NavItem icon={<BsCardList />} label="Lists" />
            <NavItem icon={<FiBookmark />} label="Bookmarks" />
            <NavItem icon={<HiUserGroup />} label="Communities" />
            <NavItem icon={<FiUser />} label="Profile" />
            <NavItem icon={<FiMoreHorizontal />} label="More" />
          </ul>
        </nav>
        <button className="post-btn">Post</button>
      </div>

      <div className="user-profile">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="User Avatar"
          className="user-avatar"
        />
        <div className="user-details">
          <p className="name">Mohammad Dwikat</p>
          <p className="handle">@MohammadDwika...</p>
        </div>
        <div className="more-icon">⋯</div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
