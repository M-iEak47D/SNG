import React from "react";

function HomeSpecial({ special }) {
  return (
    <>
      <div className="special-offer-wrapper">
        <div className="special-offer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <p className="start-here">START HERE</p>
                <p className="offer-title">{special && special.title}</p>
                <p className="offer-description">
                  {special && special.description}
                </p>
              </div>
              <div className="col-md-3">
                <div className="offer">
                  <div className="offer">
                    <div className="offer-image">
                      <div
                        className="offer-image-overlay"
                        style={{
                          backgroundImage: `url(${
                            special && special.image_1
                          } )`,
                        }}
                      ></div>
                    </div>
                    <div className="offer-content">
                      <p>{special && special.title_1}</p>
                      BREAKFAST
                      {/* <div className="offer-price">
                        <p>From</p>
                        Rs. 299
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="offer">
                  <div className="offer-image">
                    <div
                      className="offer-image-overlay"
                      style={{
                        backgroundImage: `url(${special && special.image_2} )`,
                      }}
                    ></div>
                  </div>
                  <div className="offer-content">
                    <p>SALE 20% OFF</p>
                    SAUNA
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="offer">
                  <div className="offer-image">
                    <div
                      className="offer-image-overlay"
                      style={{
                        backgroundImage: `url(${special && special.image_3} )`,
                      }}
                    ></div>
                  </div>
                  <div className="offer-content">
                    <p>SALE 20% OFF</p>
                    PARKING
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSpecial;
