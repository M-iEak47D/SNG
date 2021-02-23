import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Axios from "axios";
import axiosInstance from "../../helper/axios";
import WhereTo from "./WhereTo";
import { addDays, set, format } from "date-fns";
import { initialValues } from "../Variable/InitialValues";

function Navbar() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  const [settings, setSettings] = useState();

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/basicinfo`, {
          cancelToken: source.token,
        });
        setSettings((await response).data.data);
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
  }, []);
  useEffect(() => {
    var navbar = document.querySelector(".primary-navbar");
    var firstNavbar = document.querySelector(".first-navbar");
    // var bookingBtn = document.querySelector(".booking-btn");
    window.onscroll = function () {
      if (navbar != null) {
        scrollFunction();
      }
    };
    var sticky = navbar.offsetTop + 5;
    function scrollFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        // firstNavbar.style.display = "none";
        // bookingBtn.style.background = "#ff9800";
      } else {
        navbar.classList.remove("sticky");
        // firstNavbar.style.display = "flex";
        // bookingBtn.style.background = "none";
      }
    }
  }, []);

  return (
    <>
      <div className="primary-navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12">
              <div className="first-navbar">
                <nav className="navbar navbar-static-top navbar-expand-lg navbar-dark navbar-inverse">
                  <div className="navbar-logo">
                    <div>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/hotel sng logo color.png"
                        }
                      />
                      <Link to="/"></Link>
                    </div>
                  </div>
                  <button className="navbar-toggler" type="button">
                    <span
                      className="navbar-toggler-icon"
                      onClick={openNav}
                    ></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">
                          {" "}
                          Home <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                        >
                          About
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link class="dropdown-item" to="/about_us">
                            About us
                          </Link>
                          <Link className="dropdown-item" to="/our_team">
                            Our Team
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item active">
                        <Link className="nav-link" to="/restaurant">
                          Restaurant <span class="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/packages">
                          Packages
                          <span className="sr-only">(current)</span>
                        </Link>
                      </li>

                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                        >
                          Gallery
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link class="dropdown-item" to="/image_gallery">
                            Image Gallery
                          </Link>
                          <Link className="dropdown-item" to="/video_gallery">
                            Video Gallery
                          </Link>
                        </div>
                      </li>

                      <li className="nav-item active">
                        <Link className="nav-link" to="/blogs">
                          Blog<span class="sr-only">(current)</span>
                        </Link>
                      </li>

                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                        >
                          Contact
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link className="dropdown-item" to="/contact">
                            Contact Us
                          </Link>

                          <Link className="dropdown-item" to="/reach">
                            How to Reach
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>

            <div
              className="col-12 col-lg-3"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <div className="second-navbar-wrapper">
                <div className="second-navbar">
                  <div className="search-wrapper book_now_nav" id="searchBar">
                    <WhereTo initialValues={initialValues} />
                  </div>
                  <div className="select-country">
                    <select id="country" name="country">
                      <option value="NP">ENG</option>
                      <option value="NP">NP</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-icon">
        <a
          href={settings && settings.social_setting.facebook_url}
          target="_blank"
        >
          <i className="fab fa-facebook"></i>
        </a>

        <a
          href={settings && settings.social_setting.youtube_url}
          target="_blank"
        >
          <i className="fab fa-youtube"></i>
        </a>

        <a
          href={settings && settings.social_setting.instagram_url}
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </>
  );
}

export default Navbar;
