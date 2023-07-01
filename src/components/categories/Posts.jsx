import { useContext } from "react";
import { CatContext } from "./../../contexts/CatContext";
import { posts } from "../../data/data.js";
import "../../styles/categories/posts.css";

function Posts() {
  const { cat } = useContext(CatContext);
  return <div>Posts</div>;
}

export default Posts;
