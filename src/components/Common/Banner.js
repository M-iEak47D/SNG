import React from "react";
import Navbar from "./Navbar";

function Banner({ title, bread, home }) {
  return (
    <>
      <div class="banner" id="banner-for-other-pages">
        <div class="background-overlay">
          <Navbar />
          <div class="text-in-banner">
            <p class="banner-title">{title}</p>
            <div class="banner-subpage">
              <a href="index.html">
                {home}&nbsp;<i class="fas fa-chevron-right"></i>&nbsp;
              </a>
              <span>{bread}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
