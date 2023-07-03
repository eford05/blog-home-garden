import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CatContext } from "../contexts/CatContext";
import "../styles/footer.css";

/*
  The footer will have a newsletter section that will be prop drilled and toggled from App.js

  This will toggle a newsletter modal component
*/

function Footer({ toggle }) {
  const { setCat } = useContext(CatContext);

  return (
    <footer>
      <section className="footer-primary">
        <h3 className="logo" onClick={() => setCat(0)}>
          Blog Home & Garden
        </h3>
        <button className="news-btn" onClick={toggle}>
          Newsletter
        </button>
        <div className="footer-social-wrapper">
          <p className="footer-social">Follow Us</p>
          <ul className="footer-social-list">
            <li>
              <FaFacebookF className="footer-icon" />
            </li>
            <li>
              <FaInstagram className="footer-icon" />
            </li>
            <li>
              <FaTwitter className="footer-icon" />
            </li>
            <li>
              <FaPinterest className="footer-icon" />
            </li>
            <li>
              <FaTiktok className="footer-icon" />
            </li>
          </ul>
        </div>
      </section>
      <section className="footer-secondary">
        <ul className="footer-list">
          <li>
            <Link to="/?cat=decor" onClick={() => setCat(1)}>
              Decortating
            </Link>
          </li>
          <li>
            <Link to="/?cat=repair" onClick={() => setCat(2)}>
              Home Improvement
            </Link>
          </li>
          <li>
            <Link to="/?cat=garden" onClick={() => setCat(3)}>
              Garden
            </Link>
          </li>
          <li>
            <Link to="/?cat=housekeeping" onClick={() => setCat(4)}>
              Housekeeping
            </Link>
          </li>
          <li>
            <Link to="/?cat=recipes" onClick={() => setCat(5)}>
              Recipes
            </Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
