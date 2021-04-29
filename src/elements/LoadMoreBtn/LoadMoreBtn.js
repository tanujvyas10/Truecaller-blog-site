import React from "react";
import "./LoadMoreBtn.css";

const LoadMoreBtn = ({ onClick }) => (
  <div className="Loadmorebtn" onClick={onClick}>
    <p>Older Posts</p>
  </div>
);

export default LoadMoreBtn;
