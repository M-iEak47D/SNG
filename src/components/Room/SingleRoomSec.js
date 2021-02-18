import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

function SingleRoomSec() {
  let { id } = useParams();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [room, setroom] = useState();

  //   useEffect(() => {
  //     let source = Axios.CancelToken.source();
  //     const loadData = async () => {
  //       try {
  //         const response = axiosInstance.get(`/package/single/${slug}`, {
  //           cancelToken: source.token,
  //         });
  //         setRoom((await response).data.packages);
  //       } catch (error) {
  //         if (!Axios.isCancel(error)) {
  //           throw error;
  //         }
  //       }
  //       return () => {
  //         source.cancel();
  //       };
  //     };
  //     loadData();
  //   }, []);
  return (
    <div>
      <div className="room-section" id="room-section-for-single-room">
        <div className="container">
          <div className="room-row">
            <div className="row">
              <div className="col-md-5">
                <div className="room-section-details">
                  <div className="room-pricing">
                    FROM <span>Rs. 1000</span>/PER NIGHT
                  </div>
                  <p className="room-title">GRAND DELUXE</p>
                  <div className="room-facility">
                    <div className="facility-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/png/guests.png"}
                      />
                      &nbsp;2 Guests
                    </div>
                    <div className="facility-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/png/bed.png"}
                      />
                      &nbsp;2 Bedrooms
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
              <div className="col-md-7">
                <div className="room-description">
                  {/* <!-- <div className="room-description-title">Description:</div> --> */}
                  <p>
                    We’re halfway through the summer, but while plenty of people
                    are kicking back and enjoying their vacations, the social
                    media development teams likely aren’t doing the same. In the
                    past two weeks alone, we’ve seen four big new updates that
                    can directly impact the social marketing campaigns of
                    hotels, resorts, and other businesses in the hospitality
                    industry. Let’s take a close look at each one.
                  </p>

                  <p>
                    We’ve gotten yet another new feature for Instagram Stories,
                    and this time it’s the Chat sticker, which allows you to
                    invite Story followers to join in on a new group chat.
                    Instagram is currently advertising this as a way to
                    jumpstart big group conversations or make plans. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Enim obcaecati
                    vero aperiam, corrupti ab laudantium voluptate sit ipsum
                    quis explicabo voluptas qui omnis nulla praesentium, facilis
                    unde officiis perferendis atque! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quidem odio, ex architecto
                    neque vero a enim minus libero omnis commodi culpa, mollitia
                    sequi nemo explicabo quae impedit consectetur? Reiciendis,
                    animi.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
