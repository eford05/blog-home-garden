import { useContext, Fragment } from "react";
import PostCard from "../PostCard";
import { CatContext } from "./../../contexts/CatContext";
import { posts, heroes } from "../../data/data.js";
import "../../styles/categories/posts.css";

// Pass down post id so that post card can update post page with correct post information to be used inside post page
function Posts() {
  const { cat } = useContext(CatContext);

  const checkCat = (post) => {
    if (cat === 1) return post.cat === "decor";
    else if (cat === 2) return post.cat === "repair";
    else if (cat === 3) return post.cat === "garden";
    else if (cat === 4) return post.cat === "housekeeping";
    else if (cat === 5) return post.cat === "recipes";
  };

  return (
    <main className="home">
      {heroes
        .filter((hero) => cat === hero.id)
        .map((hero) => (
          <Fragment>
            <figure className="hero-fig">
              <img src={hero.banner} alt={hero.alt} />
            </figure>
            <h2 className="posts-title">{hero.title}</h2>
          </Fragment>
        ))}

      <div className="posts-container">
        <section className="posts-section-cat">
          {posts.filter(checkCat).map((post) => (
            <PostCard
              src={post.src}
              alt={post.alt}
              cat={post.cat}
              path={post.path}
              title={post.title}
              auth={post.auth}
              id={post.id}
              key={post.id}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Posts;
