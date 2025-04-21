import ProfileTopBar from "../ProfileTopBar/ProfileTopBar";
import "./ProfileHeader.css";
import { FiBell, FiMoreHorizontal, FiCalendar, FiLink } from "react-icons/fi";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <ProfileTopBar />

      <div className="banner"></div>

      <div className="profile-info">
        <img
          className="profile-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
        />

        <div className="action-buttons">
          <button className="more-btn">
            <FiMoreHorizontal />
          </button>
          <button className="notify-btn">
            <FiBell />
          </button>
          <button className="followed-btn">Following</button>
        </div>

        <h2 className="profile-name">React</h2>
        <p className="profile-username">@reactjs</p>

        <p className="bio">The library for web and native user interfaces</p>

        <div className="meta">
          <p className="profile-link">
            <FiLink />{" "}
            <a href="https://react.dev" target="_blank">
              react.dev
            </a>
          </p>
          <p className="profile-joined">
            <FiCalendar /> Joined July 2013
          </p>
        </div>

        <div className="profile-follow">
          <span>
            <strong>267</strong> Following
          </span>
          <span>
            <strong>708.1K</strong> Followers
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
