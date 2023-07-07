import { Fragment, useState } from "react";
import NavLinks from "./NavLinks";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import "../styles/navbar.css";
import { useContext } from "react";
import { CatContext } from "../contexts/CatContext";

/* If screen sizes regular top nav, if screen size is smaller then navbar toggles from the side */
function Navbar({ toggle }) {
  const [toggleNav, setToggleNav] = useState(false);

  const { setCat } = useContext(CatContext);

  //prevent scroll
  toggleNav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav className="primary-nav">
      <i
        onClick={() => setToggleNav(!toggleNav)}
        className={!toggleNav ? "bars" : "close"}
      >
        {!toggleNav ? (
          <HiOutlineBars3 className="nav-icon" />
        ) : (
          <HiOutlineXMark className="nav-icon" />
        )}
      </i>
      <div className="logo-wrapper" onClick={() => setCat(0)}>
        <NavLink to="/">
          <h3 className="logo">Blog Home & Garden</h3>
          <p className="logo-desc">A century of love for home and garden</p>
        </NavLink>
      </div>
      <ul className="nav-list">
        <li className="nav-li">
          <p>Username</p>
        </li>
        <li className="nav-li">
          <div className="nav-li-wrapper">
            <NavLink to="/login">Login</NavLink>
          </div>
        </li>
        <li className="nav-li">
          <div className="nav-li-wrapper">
            <NavLink to="/write">Write</NavLink>
          </div>
        </li>
        <li className="nav-li">
          <div className="nav-li-wrapper" onClick={toggle}>
            <p>Newsletter</p>
          </div>
        </li>
      </ul>
      <div
        className={
          !toggleNav ? "links-content-wrapper" : "links-content-wrapper show"
        }
      >
        <NavLinks className="links-content" />
      </div>

      {toggleNav && <div className="backdrop"></div>}
    </nav>
  );
}

export default Navbar;
