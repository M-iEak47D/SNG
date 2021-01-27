import React from "react";
import Slider from "react-slick";

function RestaurantSlider({ foods }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(foods, "heyy");
  return (
    <div>
      <div class="room-photos-slider">
        <div class="room-slide">
          <Slider {...settings}>
            {foods &&
              foods.map(
                (food) =>
                  food.image && (
                    <div class="room-content">
                      <img src={food.image} />
                    </div>
                  )
              )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSlider;
