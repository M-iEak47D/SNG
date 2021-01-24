import React from "react";
import Banner from "../components/Common/Banner";
import SinglePackageSection from "../components/Packages/SinglePackageSection";

function PackageSingle() {
  return (
    <div id="main">
      <Banner title="Single Package" home="Packages" bread="Single Package" />
      <SinglePackageSection />
    </div>
  );
}

export default PackageSingle;
