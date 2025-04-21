import {
  FaHeart,
  FaRetweet,
  FaRegEye,
  FaRegComment,
  FaDownload,
  FaEllipsisH,
} from "react-icons/fa";

import "./PostItem.css";

const PostItem = () => {
  return (
    <div className="post-item">
      <div className="repost-bar">
        <FaRetweet className="repost-icon" />
        <span>React reposted</span>
      </div>

      <div className="post-body">
        <img
          src="https://xsgames.co/randomusers/assets/avatars/male/20.jpg"
          alt="User Avatar"
          className="post-avatar"
        />
        <div className="post-content">
          <div className="post-user-header">
            <div className="post-user-info">
              <span className="post-name">danabramov.bsky.social</span>
              <span className="post-username">@dan_abramov · May 29</span>
            </div>
            <FaEllipsisH className="more-icon" />
          </div>

          <p className="post-text">
            happy 10th birthday to{" "}
            <a
              href="https://react.dev"
              target="_blank"
              className="profile-link"
            >
              @reactjs
            </a>
            !
          </p>

          <div className="post-stats">
            <span>
              <FaRegComment /> 64
            </span>
            <span>
              <FaRetweet /> 230
            </span>
            <span>
              <FaHeart /> 1.2k
            </span>
            <span>
              <FaRegEye /> 5.4k
            </span>
            <span>
              <FaDownload />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
