import React from "react";

function HomeDiscover(discover) {
  const props = discover.discover
  return (
    <>
      <div className="discover-locations">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="discover-location-content">
                <div className="best-resort-title">SNG Hotel</div>
                <p className="discover-location-title">
                 {props && props.title}
                </p>
                <p className="discover-location-text">
                  {props && props.discover_desctiption}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="discover-location-image">
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
              <div className="col-md-4">
                <div className="hotel-facility-item">
                  <img src={props && props.discover_1_image} />
                  <p className="facility-title">{props && props.discover_1_title}</p>
                  <p className="facility-text">
                    {props && props.discover_1_description}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="hotel-facility-item">
                  <img
                    src={props && props.discover_2_image}
                  /> 
                  <p className="facility-title">{props && props.discover_2_title}</p>
                  <p className="facility-text">
                  {props && props.discover_2_description}
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="hotel-facility-item">
                  <img
                    src={props && props.discover_3_image}
                  />
                  <p className="facility-title">{props && props.discover_3_title}</p>
                  <p className="facility-text">
                   {props && props.discover_3_description}
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
