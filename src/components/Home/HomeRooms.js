import React from "react";
import Skeleton from "react-loading-skeleton";

function HomeRooms({rooms}) {
  return (
    <>
      <div className="our-rooms">
        <div className="our-rooms-content">
          <p className="luxury-hotel-title">LUXURY HOTEL</p>
          <p className="our-rooms-title">Our Rooms</p>
          <p className="our-rooms-text">
            A wonderful serenity has taken my entire soul, like sweet <br />
            morning spring which I enjoy with my whole heart this spot, which
            was created.
          </p>
        </div>
        <div className="container">
          <div className="our-rooms-details-wrapper">
            <div className="our-rooms-details">
              { rooms ? rooms.map((room)=>
              <div className="hotel-room">
                <div className="hotel-room-image"  style={{backgroundImage: `url(${room.feature_image})`}}>
                  <div className="hotel-room-overlay"></div>
                  {/* <a href="#"></a> */}
                  <div className="hotel-room-price">
                   <span style= {{fontSize : "10px" , color : "orange"}}>FROM:</span>
                    <span style={{fontSize : "14px" , color : "orange"}}>{room.price}</span>
                    <br />

                    <span style={{fontSize : "14px" , color : "white", fontWeight:"700"}}>
                      {room.title}
                    </span>
                  </div>
                </div>
              </div>
              )
              :
                [1,2,3].map((z)=>
                <div className="hotel-room">
                  <Skeleton height={325}>
                    <div className="hotel-room-image">
                      <div className="hotel-room-price">
                      </div>
                    </div>
                  </Skeleton>
                </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeRooms;
