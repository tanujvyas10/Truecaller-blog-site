import React, { useState, useEffect } from "react";
import "./RelatedPost.css";
import axios from "axios";
import DisplayCard from "../../elements/DisplayCard";
const RelatedPost = ({ id }) => {
  const [relatedIDs, setRelatedIDs] = useState([]);
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`/post/getRelated/${id}`).then(async (resp) => {
      let related_posts = await resp.data.result.hits;
      let related_posts_ids = [];

      related_posts.map((element) => {
        related_posts_ids.push(element.fields.post_id);
      });
      setRelatedIDs(related_posts_ids.slice(0, 3));
    });

    setIsLoading(false);
  }, []);

  useEffect(() => {
    let temp_posts = [];
    relatedIDs.forEach(async (id) => {
      await axios
        .get(
          `https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/${id}`
        )
        .then((resp) => {
          temp_posts.push(resp.data);
          setArr((arr) => [...arr, resp.data]);
        });
    });
  }, [relatedIDs]);

  return (
    <div className="RelatedPost">
      <div className="Strip"></div>

      <h4>You might also like:</h4>
      {!isLoading ? (
        <div className="RelatedPost_section">
          {arr.map((element) => {
            return <DisplayCard key={element.ID} element={element} />;
          })}
        </div>
      ) : (
        <p>isloading....</p>
      )}
    </div>
  );
};

export default RelatedPost;
