import { React, useState, useEffect, useRef } from "react";
import Slider from "react-slick";

function SearchSlider({ room }) {
  let slider1 = [];
  let slider2 = [];
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);
  return (
    <>
      <Slider asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
        <div className="room-search-photo">
          <img src={room.feature_image} />
        </div>
        {room.other_image.map((image) => (
          <div className="room-search-photo">
            <img src={image} />
          </div>
        ))}
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
        {room.other_image.map((image) => (
          <div className="room-search-photo">
            <img src={image} />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default SearchSlider;
