import { useContext } from "react";
import { CatContext } from "./../../contexts/CatContext";
import { posts } from "../../data/data.js";
import "../../styles/categories/posts.css";

function Posts() {
  const { cat } = useContext(CatContext);
  return (
    <div className="posts-container">
      <h2 className="posts-title"></h2>
      <section className="posts-section"></section>
    </div>
  );
}

export default Posts;
