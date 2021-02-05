import React, { useEffect } from "react";
import Banner from "../components/Common/Banner";
import SinglePackageSection from "../components/Packages/SinglePackageSection";

function PackageSingle() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";
  }, []);

  return (
    <div id="main">
      <Banner title="Single Package" home="Packages" bread="Single Package" />
      <SinglePackageSection />
    </div>
  );
}

export default PackageSingle;
