import React from "react";
import "./ShowMoreLink.css";

const ShowMoreLink = ({ href = "/", label = "Show more" }) => {
  return (
    <a href={href} className="show-more">
      {label}
    </a>
  );
};

export default ShowMoreLink;
