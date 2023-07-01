import React from "react";
import SideTrends from "../SideTrends";
import { posts } from "../../data/data";
import { Link } from "react-router-dom";
import "../../styles/home.css";

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
    </main>
  );
}

export default HomePage;
