import { useContext } from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/data";
import "../styles/recommended.css";
import { PostContext } from "../contexts/PostContext";

function Recommended() {
  const { setCurrentPost } = useContext(PostContext);
  return (
    <section className="recommended">
      <h2 className="recommended-title">Recommended Reading</h2>
      <div className="recommended-wrapper">
        {posts
          .filter((post) => post.recommended)
          .map((post) => (
            <div className="recommended-content" key={post.id}>
              <figure className="recommended-fig">
                <img src={post.src} alt={post.alt} />
              </figure>
              <Link to={post.path} onClick={() => setCurrentPost(post.id)}>
                <h3 className="post-title">{post.title}</h3>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Recommended;
