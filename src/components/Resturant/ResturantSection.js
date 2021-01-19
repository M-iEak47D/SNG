import React, {useEffect, useState} from "react";
import { Link, Switch, Route } from "react-router-dom";
import axiosInstance from "../../helper/axios";
import RestaurantTab from "./RestaurantTab";
import Axios from 'axios'

function ResturantSection() {
  const [foods, setFoods] = useState()
  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/restaurant`, {
          cancelToken: source.token,
        });
        setFoods((await response).data);
          console.log(foods.foodCategories, "data");
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
              <Link to={"/restaurant"}>
                <button className="active">BREAKFAST</button>
              </Link>
              <Link to={"/restaurant/lunch"}>
                <button>LUNCH</button>
              </Link>
              <Link to={"/restaurant/dinner"}>
                <button>DINNER</button>
              </Link>
              <Link to={"/restaurant/dessert"}>
                <button>DESSERT</button>
              </Link>
              <Link to={"/restaurant/beverage"}>
                <button>BEVERAGE</button>
              </Link>
            </div>

            {/* <!-- Tab content --> */}
            <div class="menu-tab-content-all">
              <Switch>
                <Route exact path={"/restaurant"}>
                 
                  <RestaurantTab name="Breakfast"  />
                </Route>
                <Route exact path={"/restaurant/lunch"}>
                  <RestaurantTab name="Lunch" />
                </Route>
                <Route exact path={"/restaurant/dinner"}>
                  <RestaurantTab name="dinner" />
                </Route>
                <Route exact path={"/restaurant/dessert"}>
                  <RestaurantTab name="dessert" />
                </Route>
                <Route exact path={"/restaurant/beverage"}>
                  <RestaurantTab name="beverage" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResturantSection;
