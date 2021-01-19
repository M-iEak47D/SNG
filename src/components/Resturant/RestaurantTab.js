import React from "react";

function RestaurantTab({foodItem}) {
  console.log(foodItem, 'hello')
  return (
    <div>
      <div>
        <div class="container">
          <div class="row">
            {foodItem && foodItem.foods.map((food) => {
              return(
            <div class="col-md-6">
              <div class="menu-content">
                <div class="image-for-food">
                  <img
                    src={food.image}
                  />
                </div>
                <div class="food">
                  <div class="food-name">{food.title}</div>
                  <div class="food-description" dangerouslySetInnerHTML={{__html: food.description}}>
                  </div>
                </div>
                <div class="food-price">Rs. {food.price}</div>
              </div>
            </div>
              )
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantTab;
