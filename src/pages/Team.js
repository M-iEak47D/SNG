import React, { useEffect } from "react";
import Banner from '../components/Common/Banner'
import TeamSection from '../components/Team/TeamSection'

function Team() {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
    return (
      <div>
        <Banner title="Our Team" bread="Our Team" />
        <TeamSection />
      </div>
    );
}

export default Team
