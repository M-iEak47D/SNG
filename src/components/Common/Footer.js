import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import axiosInstance from "../../helper/axios";

function Footer() {
  const [settings, setSettings] = useState();

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/contact_page`, {
          cancelToken: source.token,
        });
        setSettings((await response).data);
      } catch (error) {
        if (!Axios.isCancel(error)) {
          throw error;
        }
      }
      return () => {
        source.cancel();
      };
    };
    loadData();
    window.scrollTo(0, 0);

    document.getElementById("mySidenav").style.width = "0";
  }, []);
    console.log(settings && settings.contact.image);

  return (
    <>
      <footer>
        <div id="google_translate_element"></div>
        <div className="footer-logo">
          <img src={settings && settings.contact.image} />
        </div>
        <div className="footer-title">Hotel SNG</div>
        <div className="vertical-divider"></div>
        <div className="address-contact">
          {settings && settings.contact.address} <br />
          {settings && settings.contact.primary_email} <br />
          {settings && settings.contact.primary_phone}
        </div>
        <div className="social-media-icons">
          <div className="icons-list">
            <ul>
              <li>
                <a href={settings && settings.social_setting.facebook_url}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href={settings && settings.social_setting.twitter_url}>
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href={settings && settings.social_setting.linkedin_url}>
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href={settings && settings.social_setting.instagram_url}>
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href={settings && settings.social_setting.youtube_url}>
                  <i className="fab fa-youtube"></i>
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
