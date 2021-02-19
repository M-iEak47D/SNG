import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Axios from "axios";
import axiosInstance from "../../helper/axios";
import Skeleton from "react-loading-skeleton";

function SingleRoomSec() {
  let { id } = useParams();
  console.log(id);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  let slider1 = [];
  let slider2 = [];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [room, setRoom] = useState();

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/single/room_type/${id}`, {
          cancelToken: source.token,
        });
        setRoom((await response).data.data);
      } catch (error) {
        if (!Axios.isCancel(error)) {
          throw error;
        }
      }
      return () => {
        source.cancel();
      };
    };
    loadData();
  }, []);

  return (
    <div>
      <div className="room-section" id="room-section-for-single-room">
        <div className="container">
          {room ? (
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
                            process.env.PUBLIC_URL + "/images/png/guests.png"
                          }
                        />
                        &nbsp;
                        {room.no_adult} Adult &nbsp;
                        {room.no_child} Child
                      </div>
                      <div className="facility-item">
                        <img
                          src={process.env.PUBLIC_URL + "/images/png/bed.png"}
                        />
                        &nbsp;{room.no_of_rooms} Rooms
                      </div>
                    </div>

                    <div className="amenities">
                      <p>Amenities:</p>
                      <div className="amenities-content">
                        <ul>
                          {room.amenities.map((amenitie) => (
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
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="room-description">{room.description}</div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Skeleton height={400} />
          )}
        </div>
      </div>
      {/* 
      <div class="room-photos-slider">
        <div class="room-slide">
          <Slider {...settings}>
            <div class="room-content">
              <img src={process.env.PUBLIC_URL + "/images/a.jpg"} />
            </div>
            <div class="room-content">
              <img src={process.env.PUBLIC_URL + "/images/a.jpg"} />
            </div>
          </Slider>
        </div>
      </div> */}
    </div>
  );
}

export default SingleRoomSec;
