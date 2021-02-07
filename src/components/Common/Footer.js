import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div id="google_translate_element"></div>
        <div className="footer-logo">
          <img
            src={process.env.PUBLIC_URL + "/images/hotel sng logo color.png"}
          />
        </div>
        <div className="footer-title">Hotel SNG</div>
        <div className="vertical-divider"></div>
        <div className="address-contact">
          Anamnagar, Kathmandu <br />
          info@hotelsng.com
          <br />
          +977 9812345678
        </div>
        <div className="social-media-icons">
          <div className="icons-list">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-google-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-6">
                <div className="footer-item-list">
                  <p>QUICK LINKS</p>
                  <Link to="/">Home</Link>
                  <Link to="/restaurant">Restaurant</Link>
                  <Link to="/packages">Packages</Link>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="footer-item-list">
                  <p>ABOUT</p>
                  <Link to="/about_us">About Us</Link>
                  <Link to="/our_team">Our Team</Link>
                  <Link to="/blogs">Blog</Link>
                </div>
              </div>

              <div className="col-md-4 col-6">
                <div className="footer-item-list">
                  <p>HELP</p>
                  <Link to="/contact">Contact Us</Link>
                  <Link to="/reach">How to Reach us?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <div className="copyright-container-wrapper">
            <div>
              <strong>&#169; 2020 Hotel SNG.</strong> All rights reserved.
              <a href="https://an4soft.com/" target="_blank">
                <strong>By An4soft Pvt. Ltd.</strong>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
