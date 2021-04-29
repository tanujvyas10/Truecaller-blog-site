import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tags from "../Tags";
import { useHistory } from "react-router";
import "./Category.css";
const Category = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
   
    axios
      .get("/getAllCategories")
      .then((resp) => {
        if (resp.data.message) {
          history.push("/not-found");
        }
        let { categories } = resp.data.resp;
        setCategories(categories);
        setIsLoading(false)
      })
      .catch((err) => {
        history.push("/not-found");
      });

    axios.get("/getAllTags").then((resp) => {
      if (resp.data.message) {
        history.push("/not-found");
      }
      let temp_tags = resp.data.resp.tags;

      temp_tags.sort((a, b) => b.post_count - a.post_count);
      temp_tags = temp_tags.splice(0, 10);
      setTags(temp_tags);
    });
  }, []);


  return (
    <div className="Category">
      <div className="Strip"></div>
      <h4>CATEGORY</h4>
      {!isLoading
        ? categories.map((category) => {
            return (
              <div key={category.ID} className="Domains">
                <div className="Sub_category">
                  <Link
                    style={{
                      paddingLeft: 13,
                      fontWeight: 400,
                      color: "#262626",
                      textDecoration: "none",
                    }}
                    to={{
                      pathname: `/all/${category.slug}`,
                      category: `${category.slug}`,
                    }}
                  >
                    <h4>{category.name}</h4>
                  </Link>
                </div>
              </div>
            );
          })
        : <p>Loading Category...</p>}
      <div>
        <Tags tags={tags} />
      </div>
    </div>
  );
};

export default Category;
