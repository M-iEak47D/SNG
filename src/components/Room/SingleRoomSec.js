import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Axios from "axios";
import axiosInstance from "../../helper/axios";
import Skeleton from "react-loading-skeleton";

function SingleRoomSec() {
  let { id } = useParams();
  console.log(id);
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
                <div className="col-md-5">
                  <div className="room-section-details">
                    <div className="room-pricing">
                      FROM <span>{room.price}</span>/PER NIGHT
                    </div>
                    <p className="room-title">{room.title}</p>
                    <div className="room-facility">
                      <div className="facility-item">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/png/guests.png"
                          }
                        />
                        &nbsp;{room.max_occupancy} Guests
                      </div>
                      <div className="facility-item">
                        <img
                          src={process.env.PUBLIC_URL + "/images/png/bed.png"}
                        />
                        &nbsp;{room.no_of_rooms} Bedrooms
                      </div>
                    </div>
                    <div className="amenities">
                      <p>Amenities:</p>
                      <div className="amenities-content">
                        <ul>
                          {room.amenities.map((amenitie) => (
                            <li>{amenitie.title}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="room-description">{room.description}</div>
                </div>
              </div>
            </div>
          ) : (
            <Skeleton height={400} />
          )}
        </div>
      </div>

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
      </div>
    </div>
  );
}

export default SingleRoomSec;
