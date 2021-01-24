import React, { useEffect } from "react";
import Banner from '../components/Common/Banner'
import ReachSection from '../components/Reach/ReachSection'

function Reach() {
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (
      <div id="main">
        <Banner title="How to reach?" home="Home" bread="How to reach?" />
        <ReachSection />
      </div>
    );
}

export default Reach
