import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import CommingSoon from "../Ads/commingSoon";

function Navbar() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function modalOpen() {
    $("#commingModal").toggle();
  }
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
            <div className="col-md-9 col-12">
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
                      <li className="nav-item active">
                        <Link className="nav-link" to="/about_us">
                          About us <span class="sr-only">(current)</span>
                        </Link>
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
                          Rooms
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <div className="dropdown-divider"></div>
                          <Link className="dropdown-item" to="/room_details">
                            Grand Deluxe
                          </Link>
                          <Link className="dropdown-item" to="/room_details">
                            Superior Deluxe
                          </Link>
                          <Link className="dropdown-item" to="/room_details">
                            Deluxe King Room
                          </Link>
                        </div>
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

                      {/* <li className="nav-item active">
                        <Link className="nav-link" to="/contact">
                          Contact <span class="sr-only">(current)</span>
                        </Link>
                      </li> */}

                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                        >
                          More
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <Link className="dropdown-item" to="/contact">
                            Contact
                          </Link>
                          <Link className="dropdown-item" to="/blog">
                            Blog
                          </Link>

                          <Link className="dropdown-item" to="/our_team">
                            Our Team
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
              className=" d-none col-md-3 d-md-block"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <div className="second-navbar-wrapper">
                <div className="second-navbar">
                  <div className="phone-no">
                    <i className="fa fa-phone">&nbsp; Call:</i>
                    <b>+977 9812345678</b>
                    &nbsp;|&nbsp;
                  </div>
                  <div className="login">
                    {/* <div className="login-text">
                      &nbsp;&nbsp;
                      <a href="login.html">
                        <i className="fa fa-user">&nbsp;</i>Login
                      </a>
                      &nbsp;&nbsp;
                    </div> */}
                    <div className="book-now">
                      {/* <a href="" onClick={() => modalOpen}>
                        BOOK NOW&nbsp;{" "}
                      </a> */}
                      <button onClick={modalOpen}>BOOK NOW</button>
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
      </div>
      <div className="social-icon">
        <a href="">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </>
  );
}

export default Navbar;
