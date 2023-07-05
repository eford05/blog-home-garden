import { useContext } from "react";
import { posts } from "../data/data";
import { Link } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";
import "../styles/sidetrends.css";

//Update current post with post id using context
function SideTrends() {
  const { setCurrentPost } = useContext(PostContext);
  return (
    <section className="side-trends">
      <h2 className="side-trends-title">Trending</h2>
      {posts
        .filter((post) => post.trending === true)
        .map((post) => (
          <div className="trend-card" key={post.id}>
            <figure className="trend-card-fig">
              <img src={post.src} alt={post.alt} />
            </figure>
            <Link to={post.path} onClick={() => setCurrentPost(post.id)}>
              <h3 className="trend-card-title">{post.title}</h3>
            </Link>
            <p className="trend-card-author">{post.auth}</p>
          </div>
        ))}
    </section>
  );
}

export default SideTrends;
