import { useContext } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import Recommended from "../components/Recommended";
import { Link } from "react-router-dom";
import { posts } from "../data/data";
import "../styles/post.css";
import { PostContext } from "../contexts/PostContext";

/*
  Get post information from post id, by using post context.

  Filter data to be used for the single post, by condition that the data's id matches the currentPost state
*/
function Post() {
  const { currentPost } = useContext(PostContext);
  return (
    <main className="post-body">
      {posts
        .filter((post) => currentPost === post.id)
        .map((post) => (
          <article className="post-container" key={post.id}>
            <h1 className="blog-post-title">{post.title}</h1>
            <p className="blog-post-desc">{post.desc}</p>

            <figure className="blog-post-fig">
              <img src={post.src} alt={post.alt} />
            </figure>
            <figcaption className="photo-auth">Unsplash</figcaption>

            <div className="author-wrapper">
              <p className="blog-post-auth">{post.auth}</p>
              <Link to={"/write"}>
                <HiOutlinePencil className="post-icon" />
              </Link>
              <Link to={"/write"}>
                <HiOutlineTrash className="post-icon" />
              </Link>
            </div>

            <p className="post">{post.post}</p>
          </article>
        ))}
      <Recommended />
    </main>
  );
}

export default Post;
