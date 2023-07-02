import React from "react";
import SideTrends from "../SideTrends";
import { posts } from "../../data/data";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import PostCard from "../PostCard";

//For the post section filter where post is main, not featured, not trending, and not recommended

function HomePage() {
  return (
    <main className="home">
      <div className="home-feature-wrapper">
        <section className="home-feature-story">
          <figure className="home-feature-fig">
            <img src={posts[0].src} alt={posts[0].alt} />
          </figure>
          <p className="home-feature-trend">Home Trends</p>
          <Link to={posts[0].path}>
            <h1 className="home-feature-title">{posts[0].title}</h1>
          </Link>
          <p className="home-feature-desc">{posts[0].desc}</p>
          <p className="home-feature-auth">{posts[0].auth}</p>
        </section>
        <SideTrends />
      </div>

      <div className="posts-container">
        <h2 className="posts-title">Get Inspired</h2>
        <section className="posts-section">
          {posts
            .filter(
              (post) =>
                post.main &&
                !post.featured &&
                !post.trending &&
                !post.recommended
            )
            .map((post) => (
              <PostCard
                src={post.src}
                alt={post.alt}
                cat={post.cat}
                path={post.path}
                title={post.title}
                auth={post.auth}
                key={post.id}
              />
            ))}
        </section>
      </div>

      <div className="banner">
        <section className="banner-card">
          <p className="banner-cat">Garden</p>
          <Link to="/">
            <h2 className="banner-title">
              8 Spring Landscaping Design Schemes for Every Yard
            </h2>
          </Link>
          <p className="banner-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            voluptates aliquam fugit voluptatem quisquam quae!
          </p>
          <p className="banner-auth">By John Doe</p>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
