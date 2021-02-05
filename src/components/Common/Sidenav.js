import React from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function buttonDropdown(event) {
    console.log(event);
    var target = document.getElementById(
      event.target.getAttribute("data-target")
    );
    var allDropdown = document.getElementsByClassName("dropdown-content");

    for (let i = 0; i < allDropdown.length; i++) {
      if (target != allDropdown[i]) {
        allDropdown[i].style.display = "none";
      }
    }

    var css = target.style.display;

    console.log(css);
    if (!css || css == "none") {
      target.style.display = "block";
    } else {
      target.style.display = "none";
    }
  }

  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="nav-content">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-content">
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={(e) => buttonDropdown(e)}
              className="dropbtn"
              data-target="roomsDropdown"
            >
              About <i className="fa fa-caret-down"></i>
            </button>
          </div>
          <div id="roomsDropdown" className="dropdown-content">
            <Link to="/about_us">About Us</Link>
            <Link to="/our_team">Our Team</Link>
          </div>
        </div>
        <div className="nav-content">
          <Link to="/packages">Packages</Link>
        </div>
        <div className="nav-content">
          <Link to="/restaurant">Restaurant</Link>
        </div>
        <div className="nav-content">
          <div className="dropdown">
            <button
              onClick={(e) => buttonDropdown(e)}
              className="dropbtn"
              data-target="galleryDropdown"
            >
              Gallery <i className="fa fa-caret-down"></i>
            </button>
          </div>
          <div id="galleryDropdown" className="dropdown-content">
            <Link to="/image_gallery">Images Gallery</Link>
            <Link to="/video_gallery">Video Gallery</Link>
          </div>
        </div>
        <div className="nav-content">
          <Link to="/blogs">Blog</Link>
        </div>
        <div className="nav-content">
          <div className="dropdown">
            <button
              onClick={(e) => buttonDropdown(e)}
              className="dropbtn"
              data-target="buttonDropdownContent"
            >
              Contact <i className="fa fa-caret-down"></i>
            </button>
          </div>
          <div id="buttonDropdownContent" className="dropdown-content">
            <Link to="/contact">Contact Us</Link>
            <Link to="/reach">How to Reach</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
