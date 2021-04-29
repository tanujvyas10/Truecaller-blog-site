import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../elements/Spinner/Spinner";
import "./Home.css";
import { useHistory } from "react-router";
import LoadMoreButton from "../../elements/LoadMoreBtn/LoadMoreBtn";
import PostMeta from "../PostMeta/PostMeta";
import Category from "../Category";
const Home = (props) => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);
  const [postsToShow, setPostsToShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const { category } = props.match.params;
    //console.log("started--")
    axios
      .get("/allPosts")
      .then((resp) => {
        let temp_posts = resp.data.resp;
        if (category !== undefined) {
          setPosts(temp_posts);
        } else setPosts(temp_posts);

        setPostsToShow(temp_posts.slice(0, 4));
        setIsLoading(false);
      })
      .catch((err) => {
        history.push("/not-found");
      });
  }, [props]);

  const loadMore = () => {
    setIsLoading(true);

    setTimeout(() => {
      setPostsToShow(posts.slice(0, 2 * postsToShow.length));
      setIsLoading(false);
    }, 1500);
  };

  if (isLoading) return <Spinner />;
  else
    return (
      <div>
        <div className="home">
          <div className="home_section">
            {postsToShow.map((item) => {
              return <PostMeta key={item.ID} data={item} />;
            })}

            <LoadMoreButton className="home_loadbtn" onClick={loadMore} />
          </div>
          <div className="home_category">
            <Category />
          </div>
        </div>
      </div>
    );
};

export default Home;
