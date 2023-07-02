import React from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

function Register() {
  return (
    <main className="login-reg">
      <figure className="login-reg-fig">
        <img
          src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
          alt="peony flowers"
        />
      </figure>
      <header className="header-logo">
        <Link to="/">
          <h3 className="logo">Blog Home & Garden</h3>
          <p className="logo-desc">A century of love for home and garden</p>
        </Link>
      </header>
      <form action="" className="login-reg-form" id="login">
        <h1 className="login-reg-title">Register</h1>
        <div className="login-reg-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="login-reg-input"
            placeholder="Username*"
            name="username"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="login-reg-input"
            placeholder="yourname@example.com"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="login-reg-input"
            id="password"
            placeholder="Enter your password"
            name="password"
          />
          <button className="login-reg-submit">Login</button>
          <div className="login-reg-prompt">
            <p className="login-reg-p">Have an account?</p>
            <Link to="/login" className="login-reg-link">
              Login
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Register;
