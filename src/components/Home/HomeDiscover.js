import React from "react";

function HomeDiscover() {
  return (
    <>
      <div className="discover-locations">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="discover-location-content">
                <div className="best-resort-title">BEST RESORT</div>
                <p className="discover-location-title">
                  Discover
                  <br />
                  Our Hotel
                </p>
                <p className="discover-location-text">
                  A lovely place to relax and enjoy the serenity of the city and
                  away from the crowd of Kathmandu.
                </p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="discover-location-image d-none d-lg-block">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/discover-location-hotel-room.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-facilities">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="hotel-facility-item">
                  <img src={process.env.PUBLIC_URL + "/images/bar-icon.JPG"} />
                  <p className="facility-title">Bar and Restaurant</p>
                  <p className="facility-text">
                    Enjoy different types of liquors and drinks alongside best
                    cuisine prepared by our chef.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="hotel-facility-item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/spa-salon-icon.JPG"}
                  />
                  <p className="facility-title">Parking Space</p>
                  <p className="facility-text">
                    Plenty of space for your vehicles to park for over night
                    with security built in for your ride.
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="hotel-facility-item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/swimming-icon.JPG"}
                  />
                  <p className="facility-title">Meeting Hall</p>
                  <p className="facility-text">
                    A entire place for meeting hall that can be used for
                    occasions like office meetings & birthday parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeDiscover;
