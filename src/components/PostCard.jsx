import React from "react";
import { Link } from "react-router-dom";
import "../styles/postcard.css";

function PostCard({ src, alt, cat, path, title, auth }) {
  return (
    <div className="post-card">
      <figure className="post-card-fig">
        <img src={src} alt={alt} />
      </figure>
      <div className="post-card-info">
        <p className="post-card-cat">{cat}</p>
        <Link to={path}>
          <h3 className="post-card-title">{title}</h3>
        </Link>
        <p className="post-card-auth">{auth}</p>
      </div>
    </div>
  );
}

export default PostCard;
