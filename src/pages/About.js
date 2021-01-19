import React, { useEffect } from "react";
import Banner from "../components/Common/Banner";
import AboutSection from "../components/About/AboutSection";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner title="About us" bread="About Us" />
      <AboutSection />
    </div>
  );
}

export default About;
