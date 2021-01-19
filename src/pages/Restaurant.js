import React from "react";
import Banner from "../components/Common/Banner";
import ResturantSection from "../components/Resturant/ResturantSection";
import RestaurantSlider from "../components/Resturant/RestaurantSlider";


function Restaurant() {
  return (
    <div>
      <Banner title="Restaurant" bread="Restaurant" />
      <ResturantSection />
      <RestaurantSlider />
    </div>
  );
}

export default Restaurant;

