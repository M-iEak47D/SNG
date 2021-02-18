import React from "react";

function HomeSummer({ deal }) {
  return (
    <>
      <div className="summer-deals">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="summer-deals-image">
                <img src={deal && deal.image} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="summer-deals-content">
                <div className="summer-deals-wrapper">
                  <p className="summer-deals-title">SUMMER DEALS</p>
                  <p className="summer-deals-bold-title">
                    {deal && deal.title}
                  </p>
                  <p className="summer-deals-text">
                    {deal && deal.description}
                  </p>
                  <button type="button">BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSummer;
