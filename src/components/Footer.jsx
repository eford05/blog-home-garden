import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/footer.css";

/*
  The footer will have a newsletter section that will be prop drilled and toggled from App.js

  This will toggle a newsletter modal component
*/
function Footer({ toggle }) {
  return (
    <footer>
      <section className="footer-primary">
        <h3 className="footer-logo">Blog Home & Garden</h3>
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
            <Link>Decortating</Link>
          </li>
          <li>
            <Link>Garden</Link>
          </li>
          <li>
            <Link>Recipes</Link>
          </li>
          <li>
            <Link>Housekeeping</Link>
          </li>
          <li>
            <Link>Home Improvement</Link>
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
