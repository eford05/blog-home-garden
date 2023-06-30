import React from "react";
import { NavLink } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import "../styles/navlinks.css";
import { useContext } from "react";
import { CatContext } from "../contexts/CatContext";

/*
  Set categories on click
  1 = decor
  2 = repair
  3 = garden
  4 = housekeeping
  5 = recipes
*/
function NavLinks() {
  const { setCat } = useContext(CatContext);

  return (
    <div className="links-container">
      <ul className="primary-list">
        <li className="primary-li">
          <div className="li-wrapper" onClick={() => setCat(1)}>
            <NavLink to="/?cat=decor">Decorating</NavLink>
            <HiChevronRight className="chevron" />
          </div>
        </li>
        <li className="primary-li">
          <div className="li-wrapper" onClick={() => setCat(2)}>
            <NavLink to="/?cat=home-improve">Home Improvement</NavLink>
            <HiChevronRight className="chevron" />
          </div>
        </li>
        <li className="primary-li">
          <div className="li-wrapper" onClick={() => setCat(3)}>
            <NavLink to="/?cat=garden">Garden</NavLink>
            <HiChevronRight className="chevron" />
          </div>
        </li>
        <li className="primary-li">
          <div className="li-wrapper" onClick={() => setCat(4)}>
            <NavLink to="/?cat=housekeeping">Housekeeping</NavLink>
            <HiChevronRight className="chevron" />
          </div>
        </li>
        <li className="primary-li">
          <div className="li-wrapper" onClick={() => setCat(5)}>
            <NavLink to="/?cat=recipes">Recipes</NavLink>
            <HiChevronRight className="chevron" />
          </div>
        </li>
        <li className="primary-li">
          <div className="li-wrapper no-border">
            <NavLink to="/about">About</NavLink>
            <HiChevronRight className="chevron" />
          </div>
        </li>
      </ul>
      <ul className="secondary-list">
        <li className="secondary-li">
          <p>Username</p>
        </li>
        <li className="secondary-li">
          <NavLink>Login</NavLink>
        </li>
        <li className="secondary-li">
          <NavLink>Write</NavLink>
        </li>
        <li className="secondary-li">
          <p>Newsletter</p>
        </li>
      </ul>
      <div className="social-container">
        <p className="social-prompt">Follow Us</p>
        <ul className="social-list">
          <li className="social-li">
            <FaFacebookF className="social-icon" />
          </li>
          <li className="social-li">
            <FaInstagram className="social-icon" />
          </li>
          <li className="social-li">
            <FaPinterest className="social-icon" />
          </li>
          <li className="social-li">
            <FaTiktok className="social-icon" />
          </li>
          <li className="social-li">
            <FaTwitter className="social-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavLinks;
