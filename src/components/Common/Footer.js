import React from "react";

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
              <div className="col-md-3 col-6">
                <div className="footer-item-list">
                  <p>QUICK LINKS</p>
                  <a href="index.html">Home</a>
                  <a href="rooms.html">Rooms</a>
                  <a href="gallery.html">Gallery</a>
                  <a href="restaurant.html">Restaurant and Bar</a>
                  <a href="packages.html">Packages</a>
                  <a href="blog.html">Blog</a>
                  <a href="our-team.html">Our Team</a>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="footer-item-list">
                  <p>CORPORATE</p>
                  <a href="">Careers</a>
                  <a href="">Business Partnership</a>
                  <a href="">Development Opportunities</a>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="footer-item-list">
                  <p>LEGAL</p>
                  <a href="">Ad and Cookie policy</a>
                  <a href="">Digital Millennium copyright Act</a>
                  <a href="">Legal notice</a>
                  <a href="">Privacy Policy</a>
                  <a href="">Site Usage Agreement</a>
                </div>
              </div>
              <div className="col-md-3 col-6">
                <div className="footer-item-list">
                  <p>HELP</p>
                  <a href="">Consumer Alert</a>
                  <a href="contact.html">Contact</a>
                  <a href="">FAQ</a>
                  <a href="reach.html">How to Reach us?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <div className="copyright-container-wrapper">
            <div>
              <strong>&#169; 2020 Hotel SNG.</strong> All rights reserved.
              <a href="#">
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
