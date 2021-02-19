import React, { useEffect, useState } from "react";
import SearchBar from "../Common/SearchBar";
import Navbar from "../Common/Navbar";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { addDays, set, format } from "date-fns";
import Slider from "react-slick";

function HomeBanner({ banner }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 1));

  const initialValues = {
    occupancy: [{ adult: 1, child: 0, id: "" + Math.random() }],
    selectionRange: {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    },
  };

  return (
    <>
      <Navbar />
      {banner ? (
        <Slider {...settings}>
          <div>
            <div
              className="banner"
              style={{ backgroundImage: `url(${banner.banner_image_1})` }}
            >
              <div className="background-overlay">
                <div className="text-in-banner">
                  <p className="banner-subtitle">BEST HOTEL AND RESORT</p>
                  <p className="banner-title">HOTEL SNG</p>
                  <p className="banner-description">
                    {banner && banner.banner_text_1}
                  </p>
                  <div className="room-suite-link">
                    <Link to="/contact">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="banner"
              style={{ backgroundImage: `url(${banner.banner_image_2})` }}
            >
              <div className="background-overlay">
                <div className="text-in-banner">
                  <p className="banner-subtitle">BEST HOTEL AND RESORT</p>
                  <p className="banner-title">HOTEL SNG</p>
                  <p className="banner-description">
                    {banner && banner.banner_text_2}
                  </p>
                  <div className="room-suite-link">
                    <Link to="/contact">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className="banner"
              style={{ backgroundImage: `url(${banner.banner_image_3})` }}
            >
              <div className="background-overlay">
                <div className="text-in-banner">
                  <p className="banner-subtitle">BEST HOTEL AND RESORT</p>
                  <p className="banner-title">HOTEL SNG</p>
                  <p className="banner-description">
                    {banner && banner.banner_text_3}
                  </p>
                  <div className="room-suite-link">
                    <Link to="/contact">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      ) : (
        <>
          <Skeleton height={500}>
            <div className="search-wrapper" id="searchBar">
              <Skeleton height={150} />
            </div>
          </Skeleton>
        </>
      )}
      <SearchBar formData={initialValues} />
    </>
  );
}

export default HomeBanner;
