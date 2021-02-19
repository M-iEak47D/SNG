import React from "react";
import Skeleton from "react-loading-skeleton";

function RestaurantTab({ foodItem }) {
  return (
    <div>
      <div>
        <div class="container">
          <div class="row">
            {foodItem
              ? foodItem.foods.map((food) => {
                  return (
                    <div class="col-md-6">
                      <div class="menu-content">
                        <div class="image-for-food">
                          <img src={food.image} />
                        </div>
                        <div class="food">
                          <div class="food-name">{food.title}</div>
                          <div
                            class="food-description"
                            dangerouslySetInnerHTML={{
                              __html: food.description,
                            }}
                          ></div>
                        </div>
                        <div class="food-price">
                          {food.price != null ? "Rs." : ""} {food.price}
                        </div>
                      </div>
                    </div>
                  );
                })
              : [1, 2, 3, 4].map((a) => (
                  <div class="col-md-4">
                    <Skeleton height={50} width={200} />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantTab;
