import React, {useEffect, useState} from "react";
import { Link, Switch, Route } from "react-router-dom";
import axiosInstance from "../../helper/axios";
import RestaurantTab from "./RestaurantTab";
import Axios from 'axios'

function ResturantSection() {
  const [foods, setFoods] = useState()
  const [foodItem, setFoodItem] = useState()
  const [active, setActive] = useState()

  const handleActive = (slug) =>{
    const foodFilter = foods.filter((food)=> food.slug === slug)[0]
    setActive(slug)
    setFoodItem(foodFilter)
  }
  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/restaurant`, {
          cancelToken: source.token,
        });
        setFoods((await response).data.foodCategories);
        setFoodItem((await response).data.foodCategories[0])
        setActive((await response).data.foodCategories[0].slug)
        // console.log((await response).data.foodCategories[0].slug, 'hello')
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
      <div className="restaurant-section">
        <div className="happy-hours">
          <div className="happy-hours-title">HAPPY HOURS</div>
          <div className="happy-hours-time">
            Mon - Fri : 9am - 11am & 2pm - 8pm <br />
            Sun 10pm - Midnight
          </div>
          <div class="restaurant-menu">
            {/* <!-- Tab links --> */}
            <div class="tab">
              {foods && foods.map((duration) => 
                <button className={active && active === duration.slug ? "active": " "}
                onClick={()=> handleActive(duration.slug)}
                >{duration.title}</button>
              )}
            </div>

            {/* <!-- Tab content --> */}
            <div class="menu-tab-content-all">
              <RestaurantTab foodItem = {foodItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResturantSection;
