import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileTabs from "./ProfileTabs/ProfileTabs";
import "./MainProfileSection.css";
import PostItem from "./PostItem/PostItem";
import WhoToFollow from "./WhoToFollow/WhoToFollow";

const MainProfileSection = () => {
  return (
    <div className="main-profile-section">
      <ProfileHeader />
      <ProfileTabs />
      <PostItem />
      <WhoToFollow />
    </div>
  );
};

export default MainProfileSection;
