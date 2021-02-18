import React from "react";
import Slider from "react-slick";

function RestaurantSlider({ sliders }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div class="room-photos-slider">
        <div class="room-slide">
          {sliders && (
            <Slider {...settings}>
              <div class="room-content">
                <img src={sliders.slider_1} />
              </div>
              <div class="room-content">
                <img src={sliders.slider_2} />
              </div>
              <div class="room-content">
                <img src={sliders.slider_3} />
              </div>
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantSlider;
