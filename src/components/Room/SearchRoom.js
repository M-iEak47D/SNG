import { React, useState, useEffect } from "react";
import SearchBar from "../Common/SearchBar";
import { useLocation, useHistory, Link, Route, Router } from "react-router-dom";
import Checkout from "../../pages/Checkout";

function SearchRoom() {
  const [formData, setFormData] = useState();
  const [roomData, setRoomData] = useState();
  const history = useHistory();

  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setFormData(location.state.formData);
      setRoomData(location.state.roomData);
    } else {
      history.push("/");
    }
  }, [location]);

  const bookNow = (room) => {
    history.push({
      pathname: "/checkout",
      state: { roomData: room, formData: formData },
    });
  };

  console.log(roomData, "roomdata");

  return (
    <>
      <div className="search-room-section">
        <SearchBar formData={formData} />

        <div className="room-section-wrapper">
          {roomData && roomData.length > 0 ? (
            roomData.map((room) => (
              <div className="room-section">
                <div className="container">
                  <div className="room-row">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="room-section-details">
                          <p className="room-title">{room.title}</p>
                          <div className="room-search-photo">
                            <img src={room.feature_image} />
                          </div>
                          <div className="room-facility">
                            <div className="facility-item">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/images/png/guests.png"
                                }
                              />
                              &nbsp;2 Guests
                            </div>
                            <div className="facility-item">
                              <img
                                src={
                                  process.env.PUBLIC_URL + "/images/png/bed.png"
                                }
                              />
                              &nbsp;2 Bedrooms
                            </div>
                            <div className="facility-item">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/images/png/shower.png"
                                }
                              />
                              &nbsp;2 Bathrooms
                            </div>
                          </div>
                          <div className="amenities">
                            <p>Amenities:</p>
                            <div className="amenities-content">
                              <ul>
                                <li>BUTLER SERVICE</li>
                                <li>DIRECT DIAL PHONE</li>
                                <li>FREE WIFI</li>
                              </ul>
                              <ul>
                                <li>HAIR DRYER</li>
                                <li>PRIVATE POOL</li>
                                <li>SAFE DEPOSIT BOX</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="room-description">
                          {/* <!-- <div className="room-description-title">Description:</div> --> */}
                          <p>
                            We’re halfway through the summer, but while plenty
                            of people are kicking back and enjoying their
                            vacations, the social media development teams likely
                            aren’t doing the same. In the past two weeks alone,
                            <span className="read-more-dots">...</span>
                            <span
                              className="read-more"
                              style={{ display: "none" }}
                            >
                              we’ve seen four big new updates that can directly
                              impact the social marketing campaigns of hotels,
                              resorts, and other businesses in the hospitality
                              industry. Let’s take a close look at each one.
                              <br />
                              We’ve gotten yet another new feature for Instagram
                              Stories, and this time it’s the Chat sticker,
                              which allows you to invite Story followers to join
                              in on a new group chat. Instagram is currently
                              advertising this as a way to jumpstart big group
                              conversations or make plans. Lorem ipsum dolor sit
                              amet consectetur adipisicing elit. Enim obcaecati
                              vero aperiam, corrupti ab laudantium voluptate sit
                              ipsum quis explicabo voluptas qui omnis nulla
                              praesentium, facilis unde officiis perferendis
                              atque! Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Quidem odio, ex architecto neque
                              vero a enim minus libero omnis commodi culpa,
                              mollitia sequi nemo explicabo quae impedit
                              consectetur? Reiciendis, animi.
                            </span>
                          </p>
                          <button
                            onclick="readMoreFunction(event)"
                            className="read-more-button"
                          >
                            Read More&nbsp;<i className="fa fa-angle-down"></i>
                          </button>
                        </div>
                        <div className="price-selection">
                          <div className="price-selection-top">
                            <div className="price-selection-title">
                              King bed (qty)
                            </div>
                            <div className="price-selection-cost">
                              Rs. {room.price}
                            </div>
                          </div>
                          <div className="price-selection-bottom">
                            <div className="price-selection-description">
                              <ul>
                                <li>
                                  <i className="fa fa-check"></i>&nbsp;Free
                                  cancellation before 6 pm
                                </li>
                                <li>
                                  <i className="fa fa-check"></i>&nbsp;Breakfast
                                  included
                                </li>
                              </ul>
                            </div>

                            <div className="price-selection-select">
                              <button onClick={() => bookNow(room)}>
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no_room">
              <div className="no_room_sec">
                <h1>No room available</h1>
                <p>Please search again by modifying other search options</p>
                <p>Thank you for your co-operation :)</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchRoom;
