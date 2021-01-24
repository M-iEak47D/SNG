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
              Rooms <i className="fa fa-caret-down"></i>
            </button>
          </div>
          <div id="roomsDropdown" className="dropdown-content">
            <Link to="/room_details">Grand Deluxe</Link>
            <Link to="/room_details">Superior Deluxe</Link>
            <Link to="/room_details">Deluxe King Room</Link>
          </div>
        </div>
        <div className="nav-content">
          <Link to="/packages">Packages</Link>
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
          <Link to="/contact">Contact</Link>
        </div>
        <div className="nav-content">
          <div className="dropdown">
            <button
              onClick={(e) => buttonDropdown(e)}
              className="dropbtn"
              data-target="buttonDropdownContent"
            >
              More <i className="fa fa-caret-down"></i>
            </button>
          </div>
          <div id="buttonDropdownContent" className="dropdown-content">
            <Link to="/restaurant">Restaurant</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about_us">About Us</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/reach">How to Reach</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
