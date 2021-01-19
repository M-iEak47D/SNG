import React, { useEffect } from "react";
import Banner from '../components/Common/Banner'
import ContactSection from '../components/Contact/ContactSection'

function Contact() {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
    return (
      <div id="main">
        <Banner title="Contact" bread="Contact" />
        <ContactSection />
      </div>
    );
}

export default Contact
