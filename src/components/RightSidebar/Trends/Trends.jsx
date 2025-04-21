import { BsThreeDots } from "react-icons/bs";
import "./Trends.css";
import ShowMoreLink from "../../ShowMoreLink/ShowMoreLink";

const trends = [
  {
    id: "trend1",
    category: "Gaming · Trending",
    title: "#EldenRing",
    tweets: "120K posts",
  },
  {
    id: "trend2",
    category: "Music · Trending",
    title: "#TaylorSwift",
    tweets: "80K posts",
  },
  {
    id: "trend3",
    category: "Technology · Trending",
    title: "#ReactJS",
    tweets: "65K posts",
  },
];

const Trends = () => {
  return (
    <div className="trends">
      <h3 className="trends-title">Trends for you</h3>
      {trends.map((trend) => (
        <div key={trend.id} className="trend-item">
          <div className="trend-top">
            <span className="trend-category">{trend.category}</span>
            <BsThreeDots className="more-icon" />
          </div>
          <span className="trend-title">{trend.title}</span>
          <span className="trend-tweets">{trend.tweets}</span>
        </div>
      ))}
      <ShowMoreLink/>
    </div>
  );
};

export default Trends;
