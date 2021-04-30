import React, { useEffect, useState } from "react";
import Banner from "../components/Common/Banner";
// import AboutSection from "../components/About/AboutSection";
import Axios from 'axios'
import axiosInstance from "../helper/axios";


function Terms() {
  const [terms, setTerms] = useState()
  useEffect(() => {
    axiosInstance.get('/terms-and-condition').then(
      res => setTerms(res.data.data.terms_condition)
    )
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";

  }, []);
  return (
    <div id="main">
      <Banner title="Terms and Condition" home="Home" bread="About Us" />
      <p>{terms && terms}</p>
    </div>
  );
}

export default Terms;
