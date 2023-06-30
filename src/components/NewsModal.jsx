import React from "react";
import "../styles/newsmodal.css";
import { HiOutlineXMark } from "react-icons/hi2";

/*
    The toggle function is passed down as a prop from App.js to close modal on click
*/
function NewsModal({ toggle }) {
  return (
    <div className="news-modal-backdrop">
      <div className="news-modal">
        <div className="modal-logo-wrapper">
          <h3 className="newsletter-logo">Blog Home & Garden</h3>
          <HiOutlineXMark className="close-modal" onClick={toggle} />
        </div>

        <p className="newsletter-promo">
          Stay inspired with up to date news for all your home and garden
          passions.
        </p>
        <form action="" id="newsletter" className="newsletter-form">
          <div className="email-wrapper">
            <label htmlFor="news-email">Email address</label>
            <input
              type="text"
              id="news-email"
              placeholder="yourname@example.com"
            />
          </div>

          <div className="newsletter-content">
            <h3 className="subscription-title">Newsletter Subscription</h3>
            <div className="sub-cat">
              <input type="checkbox" id="decor" />
              <label htmlFor="decor">Decorating</label>
            </div>
            <div className="sub-cat">
              <input type="checkbox" id="repair" />
              <label htmlFor="repair">Home Improvement</label>
            </div>
            <div className="sub-cat">
              <input type="checkbox" id="garden" />
              <label htmlFor="garden">Garden</label>
            </div>
            <div className="sub-cat">
              <input type="checkbox" id="housekeeping" />
              <label htmlFor="housekeeping">Housekeeping</label>
            </div>
            <div className="sub-cat">
              <input type="checkbox" id="recipes" />
              <label htmlFor="recipes">Recipes</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsModal;
