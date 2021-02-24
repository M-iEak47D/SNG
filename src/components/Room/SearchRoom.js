import { React, useState, useEffect, useRef } from "react";
import SearchBar from "../Common/SearchBar";
import { useLocation, useHistory, Link, Route, Router } from "react-router-dom";
import Checkout from "../../pages/Checkout";
import Slider from "react-slick";

function SearchRoom() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [formData, setFormData] = useState();
  const [roomData, setRoomData] = useState();
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  let slider1 = [];
  let slider2 = [];
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

  console.log(roomData && roomData, "heyy");

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const bookNow = (room) => {
    history.push({
      pathname: "/checkout",
      state: { roomData: room, formData: formData },
    });
  };



  const readMore = (e) => {
    var btn = e.target;
    var para = btn.previousElementSibling;

    para.classList.toggle("active");
    btn.classList.toggle("active");
  };

  return (
    <>
      <div className="search-room-section">
        <SearchBar formData={formData} />

        <div className="room-section-wrapper">
          {roomData &&
          roomData.length > 0 &&
          formData &&
          formData.startDate != formData.endDate ? (
            roomData.map((room) => (
              <div className="room-section">
                <div className="container">
                  <div className="room-row">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="room-section-details">
                          <p className="room-title">{room.title}</p>

                          <Slider
                            asNavFor={nav2}
                            ref={(slider) => (slider1 = slider)}
                          >
                            <div className="room-search-photo">
                              <img src={room.feature_image} />
                            </div>
                            <div className="room-search-photo">
                              <img src={room.feature_image} />
                            </div>
                            <div className="room-search-photo">
                              <img src={room.feature_image} />
                            </div>
                            <div className="room-search-photo">
                              <img src={room.feature_image} />
                            </div>
                            <div className="room-search-photo">
                              <img src={room.feature_image} />
                            </div>
                          </Slider>
                          <Slider
                            asNavFor={nav1}
                            ref={(slider) => (slider2 = slider)}
                            slidesToShow={3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                          >
                            <div className="room-search-photo">
                              <img src={room.feature_image} />
                            </div>
                            <div className="room-search-photo">
                              <img src={room.feature_image} />
                            </div>
                            <div className="room-search-photo">
                              <img src={room.feature_image} />
                            </div>
                            <div className="room-search-photo">
                              <img src={room.feature_image} />
                            </div>
                            <div className="room-search-photo">
                              <img src={room.feature_image} />
                            </div>
                          </Slider>

                          <div className="room-facility">
                            <div className="facility-item">
                              <img
                                src={
                                  process.env.PUBLIC_URL +
                                  "/images/png/guests.png"
                                }
                              />
                              &nbsp;
                              {formData &&
                                formData.occupancy
                                  .map((item) => item.adult)
                                  .reduce(
                                    (curval, newval) => curval + newval
                                  )}{" "}
                              Adult &nbsp;
                              {formData &&
                              formData.occupancy
                                .map((item) => item.child)
                                .reduce((curval, newval) => curval + newval) > 0
                                ? formData.occupancy
                                    .map((item) => item.child)
                                    .reduce(
                                      (curval, newval) => curval + newval
                                    ) + " Child"
                                : ""}{" "}
                            </div>
                            <div className="facility-item">
                              <img
                                src={
                                  process.env.PUBLIC_URL + "/images/png/bed.png"
                                }
                              />
                              &nbsp;{formData && formData.occupancy.length}{" "}
                              Rooms
                            </div>
                          </div>

                          <div className="amenities">
                            <p>Amenities:</p>
                            <div className="amenities-content">
                              <div className="row amentities_row ">
                                {room.amenities.map((amenitie) => (
                                  <div className="col-6">
                                    <ul>
                                      <li>
                                        <span
                                          className="amentities_icon"
                                          dangerouslySetInnerHTML={{
                                            __html: amenitie.icon,
                                          }}
                                        />
                                        {"  "}
                                        {amenitie.title}
                                      </li>
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="room-description">
                          <p className="read active">{room.description}</p>
                          <button
                            className="read_more_btn active"
                            onClick={(e) => readMore(e)}
                          >
                            &nbsp;<i className="fa fa-angle-down"></i>
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
