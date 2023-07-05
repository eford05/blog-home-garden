import { useContext } from "react";
import "../styles/post.css";
import { PostContext } from "../contexts/PostContext";

/*
  Get post information from post id, by using post context.
*/
function Post() {
  const { currentPost } = useContext(PostContext);
  return (
    <main className="post">
      <article className="post-container">Post id: {currentPost}</article>
      <div className="endorsement-container"></div>
    </main>
  );
}

export default Post;
