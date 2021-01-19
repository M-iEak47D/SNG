import React from "react";

function RestaurantTab(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="menu-content">
                <div class="image-for-food">
                  <img
                    src={process.env.PUBLIC_URL + "/images/food-dinner.jpg"}
                  />
                </div>
                <div class="food">
                  <div class="food-name">Omelette</div>
                  <div class="food-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div class="food-price">Rs. 1000</div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="menu-content">
                <div class="image-for-food">
                  <img
                    src={process.env.PUBLIC_URL + "/images/food-dinner.jpg"}
                  />
                </div>
                <div class="food">
                  <div class="food-name">Omelette</div>
                  <div class="food-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
                <div class="food-price">Rs. 1000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantTab;
