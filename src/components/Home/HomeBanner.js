import React from "react";
import SearchBar from "../Common/SearchBar";
import Navbar from "../Common/Navbar";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function HomeBanner({ banner }) {
  console.log(banner, "banner");
  return (
    <>
      {banner ? (
        <div
          className="banner"
          style={{ backgroundImage: `url(${banner.banner_image})` }}
        >
          <div className="background-overlay">
            <Navbar />
            <div className="text-in-banner">
              <p className="banner-subtitle">BEST HOTEL AND RESORT</p>
              <p className="banner-title">HOTEL SNG</p>
              <p className="banner-description">
                {banner && banner.banner_text}
              </p>
              <div className="room-suite-link">
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            <SearchBar />
          </div>
        </div>
      ) : (
        <>
          <Skeleton height={500}>
            <div className="search-wrapper" id="searchBar">
              <Skeleton height={150} />
            </div>
          </Skeleton>
        </>
      )}
    </>
  );
}

export default HomeBanner;
