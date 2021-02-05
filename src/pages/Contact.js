import React, { useEffect } from "react";
import Banner from "../components/Common/Banner";
import ContactSection from "../components/Contact/ContactSection";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";
  }, []);
  return (
    <div id="main">
      <Banner title="Contact" home="Home" bread="Contact" />
      <ContactSection />
    </div>
  );
}

export default Contact;
