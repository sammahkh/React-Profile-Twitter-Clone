import { FaUserFriends } from "react-icons/fa";
import FollowSuggestion from "./FollowSuggestion/FollowSuggestion";
import "./WhoToFollow.css";
const suggestions = [
  {
    avatar: "https://avatars.githubusercontent.com/u/9892522",
    name: "freeCodeCamp.org",
    username: "freeCodeCamp",
    bio: "We're a community of people who are building new skills...",
    verified: true,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/36375589",
    name: "TypeScript",
    username: "typescript",
    bio: "TypeScript is a superset of JavaScript...",
    verified: false,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/67109815",
    name: "Tailwind CSS",
    username: "tailwindcss",
    bio: "The utility-first CSS framework for building custom designs.",
    verified: true,
  },
];

const WhoToFollow = () => {
  return (
    <div className="who-to-follow">
      <h3 className="follow-title">Who to follow</h3>
      {suggestions.map((user) => (
        <FollowSuggestion key={user.username} {...user} />
      ))}
      <a href="/" className="show-more">
        Show more
      </a>
    </div>
  );
};

export default WhoToFollow;
