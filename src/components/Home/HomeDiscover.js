import React from "react";

function HomeDiscover(discover) {
  const props = discover.discover
  return (
    <>
      <div className="discover-locations">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="discover-location-content">
                <div className="best-resort-title">SNG Hotel</div>
                <p className="discover-location-title">
                 {props && props.title}
                </p>
                <p className="discover-location-text">
<<<<<<< HEAD
                  A lovely place to relax and enjoy the serenity of the city and
                  away from the crowd of Kathmandu.
=======
                  {props && props.discover_desctiption}
>>>>>>> 0f7a93ab8b542cbebdca759de0f175a89f399804
                </p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="discover-location-image d-none d-lg-block">
                <img
                  src={
                    props && props.discover_image
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
                  <img src={props && props.discover_1_image} />
                  <p className="facility-title">{props && props.discover_1_title}</p>
                  <p className="facility-text">
<<<<<<< HEAD
                    Enjoy different types of liquors and drinks alongside best
                    cuisine prepared by our chef.
=======
                    {props && props.discover_1_description}
>>>>>>> 0f7a93ab8b542cbebdca759de0f175a89f399804
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="hotel-facility-item">
                  <img
                    src={props && props.discover_2_image}
                  /> 
                  <p className="facility-title">{props && props.discover_2_title}</p>
                  <p className="facility-text">
<<<<<<< HEAD
                    Plenty of space for your vehicles to park for over night
                    with security built in for your ride.
=======
                  {props && props.discover_2_description}
>>>>>>> 0f7a93ab8b542cbebdca759de0f175a89f399804
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="hotel-facility-item">
                  <img
                    src={props && props.discover_3_image}
                  />
                  <p className="facility-title">{props && props.discover_3_title}</p>
                  <p className="facility-text">
<<<<<<< HEAD
                    A entire place for meeting hall that can be used for
                    occasions like office meetings & birthday parties.
=======
                   {props && props.discover_3_description}
>>>>>>> 0f7a93ab8b542cbebdca759de0f175a89f399804
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
