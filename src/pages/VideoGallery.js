import React, { useEffect } from "react";
import Banner from '../components/Common/Banner'
import Video from '../components/Gallery/Video'

function VideoGallery() {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
    return (
      <div id="main">
        <Banner title="Video Gallery" bread="Video Gallery" />
        <Video />
      </div>
    );
}

export default VideoGallery
