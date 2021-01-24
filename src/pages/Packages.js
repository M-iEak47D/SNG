import React, { useEffect } from "react";
import Banner from "../components/Common/Banner";
import Allpackages from "../components/Packages/Allpackages";

function Packages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div id="main">
      <Banner title="Packages" bread="Packages" home="Home" />
      <Allpackages />
    </div>
  );
}

export default Packages;
