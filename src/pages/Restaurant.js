import React, { useEffect } from "react";
import Banner from "../components/Common/Banner";
import ResturantSection from "../components/Resturant/ResturantSection";
import RestaurantSlider from "../components/Resturant/RestaurantSlider";

function Restaurant() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="main">
      <Banner title="Restaurant" home="Home" bread="Restaurant" />
      <ResturantSection />
    
    </div>
  );
}

export default Restaurant;
