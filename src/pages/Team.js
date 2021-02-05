import React, { useEffect } from "react";
import Banner from '../components/Common/Banner'
import TeamSection from '../components/Team/TeamSection'

function Team() {
 useEffect(() => {
   window.scrollTo(0, 0);
   document.getElementById("mySidenav").style.width = "0";
 }, []);
    return (
      <div id="main">
        <Banner title="Our Team" home="Home" bread="Our Team" />
        <TeamSection />
      </div>
    );
}

export default Team
