import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/postcard.css";
import { PostContext } from "../contexts/PostContext";

/*
  Update current post state with selected post id, passed from filtered and mapped data from homepage and posts components
*/
function PostCard({ classStyle, src, alt, cat, path, title, auth, id }) {
  const { setCurrentPost } = useContext(PostContext);
  return (
    <div className={classStyle === "home" ? "home-post-card" : "cat-post-card"}>
      <figure className="post-fig">
        <img src={src} alt={alt} />
      </figure>
      <div className="post-info">
        <p className="post-cat">{cat}</p>
        <Link to={path} onClick={() => setCurrentPost(id)}>
          <h3 className="post-title">{title}</h3>
        </Link>
        <p className="post-auth">{auth}</p>
      </div>
    </div>
  );
}

export default PostCard;
