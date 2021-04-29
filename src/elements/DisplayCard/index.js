import React from "react";
import "./DisplayCard.css";
import { Link } from "react-router-dom";

const DisplayCard = ({ element }) => {
  return (
    <div className="DisplayCard">
      <div className="DisplayCard_Intro">
        <Link
          className="linking"
          style={{
            paddingLeft: 13,
            fontWeight: 600,
            color: "#1c1919",
            textDecoration: "none",
          }}
          to={{ pathname: `/post/${element.ID}`, postID: `${element.ID}` }}
        >
          <p> {element.title}</p>
        </Link>
      </div>
    </div>
  );
};

export default DisplayCard;
