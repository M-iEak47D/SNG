import React, { useEffect } from "react";
import Banner from "../components/Common/Banner";
import Image from "../components/Gallery/Image";

function ImageGallery() {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div id="main"> 
      <Banner title="Images Gallery" bread="Images Gallery" />
      <Image />

    </div>
  );
}

export default ImageGallery;
