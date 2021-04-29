import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Post.css";
import moment from "moment";
import EventIcon from "@material-ui/icons/Event";
import { useHistory } from "react-router";
import Spinner from "../../elements/Spinner/Spinner";
import Category from "../Category";
import RelatedPost from "../RelatedPost";
const styleObj = {
  fontSize: "20px",
  textDecoration: "none",
};

const Post = (props) => {
  const history = useHistory();

  const { id } = props.match.params;
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/getPostById/${id}`)
      .then((resp) => {
        if (resp.data.message) {
          history.push("/not-found");
        }
        setPost(resp.data.resp);
        setIsLoading(false);
      })
      .catch((err) => {
        history.push("/not-found");
      });
  }, [props]);

  if (isLoading) {
    return <Spinner />;
  } else
    return (
      <div>
        <div className="Post">
          <div className="Post_section">
            <img src={post.featured_image} alt="" />
            <h1>{post.title}</h1>
            <p>
              {" "}
              <EventIcon /> {moment(post.date).format("MMM Do YY")}
            </p>

            <span>
              <div
                className="Post_content"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={styleObj}
              />
            </span>
          </div>
          <div className="Post_category">
            <Category />
          </div>
        </div>
        <div className="Post_relatedPost">
          <RelatedPost id={post.ID} />
        </div>
      </div>
    );
};

export default Post;
