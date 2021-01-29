import React, { useEffect , useState} from "react";
import SearchBar from "../Common/SearchBar";
import Navbar from "../Common/Navbar";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { addDays, set, format } from "date-fns";

function HomeBanner({ banner }) {
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

            <SearchBar formData={initialValues} />
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
