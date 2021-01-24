import React, { useState, useEffect } from "react";
import HomeBanner from "../components/Home/HomeBanner";
import HomeWelcome from "../components/Home/HomeWelcome";
import HomeDiscover from "../components/Home/HomeDiscover";
import HomeSummer from "../components/Home/HomeSummer";
import HomeRooms from "../components/Home/HomeRooms";
import HomeNewsletter from "../components/Home/HomeNewsletter";
import HomeSpecial from "../components/Home/HomeSpecial";
import HomeTestimonial from "../components/Home/HomeTestimonial";
import Footer from "../components/Common/Footer";
import axiosInstance from "../helper/axios";
import Axios from "axios";
import CommingSoon from "../components/Ads/commingSoon";
import $ from "jquery";

function Home() {
  const [rooms, setRooms] = useState();
  const [testimonials, setTestimonials] = useState();
  const [banner, setBanner] = useState();
  const [welcome, setWelcome] = useState();
  useEffect(() => {
    $("#commingModal").toggle();
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/homepage`, {
          cancelToken: source.token,
        });
        setRooms((await response).data.rooms);
        setTestimonials((await response).data.testimonials);
        setBanner((await response).data.data);
        setWelcome((await response).data.welcome);
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
    window.scrollTo(0, 0);
  }, []);
  console.log(rooms, "hello");
  return (
    <div id="main">
      <HomeBanner banner={banner} />
      <HomeWelcome welcome={welcome} />
      <HomeDiscover />
      <HomeSummer />
      <HomeRooms rooms={rooms} />
      <HomeNewsletter />
      <HomeSpecial />
      <div className="container">
        <div className="vertical-divider"></div>
      </div>
      <HomeTestimonial testimonials={testimonials} />
    </div>
  );
}

export default Home;
