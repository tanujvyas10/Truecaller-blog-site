import React from "react";
import moment from "moment";
import "./PostMeta.css";
import { Link } from "react-router-dom";
import EventIcon from "@material-ui/icons/Event";

const PostMeta = ({ data }) => {
  return (
    <div>
      <div className="PostMeta">
        <img src={data.featured_image} alt="" />

        <div className="PostMeta__info">
          <div className="PostMeta__infoTop">
            <h3>{data.title}</h3>
            <p>
              {" "}
              <EventIcon /> {moment(data.date).format("MMM Do YY")}
            </p>

            <span>
              <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />
            </span>
          </div>
          <Link
            style={{
              paddingLeft: 13,
              fontWeight: 400,
              color: "#007dcc",
              textDecoration: "none",
            }}
            to={{ pathname: `/post/${data.ID}`, postID: `${data.ID}` }}
          >
            <h3>Click to Continue</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostMeta;
