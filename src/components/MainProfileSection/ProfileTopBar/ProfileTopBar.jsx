import { FaArrowLeft } from "react-icons/fa";
import "./ProfileTopBar.css";

const ProfileTopBar = () => {
  return (
    <div className="profile-top-bar">
      <FaArrowLeft className="back-icon" />
      <div className="profile-top-info">
        <h2 className="profile-name">React</h2>
        <p className="post-count">7,014 Posts</p>
      </div>
    </div>
  );
};

export default ProfileTopBar;
