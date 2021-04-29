import React, { useState, useEffect } from "react";
import "./Tags.css";
import { Link } from "react-router-dom";
const Tags = ({ tags }) => {
  const [Tags, setTags] = useState([]);

  useEffect(() => {
     
    setTags(tags);
    
  }, [tags]);

  return (
    <div className="Tags">
      <div className="Strip"></div>
      <div className="">
        <h2># Trending...</h2>
        {
            Tags.length >0 ?
            Tags.map((tag) => {
                return (
                  <Link
                    key={tag.ID}
                    style={{
                      fontWeight: 700,
                      color: "#262626",
                      textDecoration: "none",
                    }}
                    to={{ pathname: `/all/${tag.name}`, category: `${tag.slug}` }}
                  >
                    <h4 className="link">#{tag.name}</h4>
                  </Link>
                );
              })
              :
              <p>Loading Trends...</p>
        }
       
      </div>
    </div>
  );
};

export default Tags;
