import React, { useEffect } from "react";
import Banner from '../components/Common/Banner'
import Video from '../components/Gallery/Video'

function VideoGallery() {
 useEffect(() => {
   window.scrollTo(0, 0);
   document.getElementById("mySidenav").style.width = "0";
 }, []);
    return (
      <div id="main">
        <Banner title="Video Gallery" home="Home" bread="Video Gallery" />
        <Video />
      </div>
    );
}

export default VideoGallery
