import { FaUserFriends, FaCheckCircle } from "react-icons/fa";
import "./FollowSuggestion.css";

const FollowSuggestion = ({ avatar, name, username, bio, verified }) => {
  return (
    <div className="suggestion">
      <img src={avatar} alt={name} className="suggestion-avatar" />
      <div className="suggestion-info">
        <span className="suggestion-name">
          {name}
          {verified && <FaCheckCircle className="verified-icon" />}
        </span>
        <span className="suggestion-username">@{username}</span>
        <p className="suggestion-bio">{bio}</p>
        <div className="followed-by">
          <FaUserFriends className="followed-icon" />
          <span>Yousef Gh. and 9 others follow</span>
        </div>
      </div>
      <button className="follow-btn">Follow</button>
    </div>
  );
};

export default FollowSuggestion;
