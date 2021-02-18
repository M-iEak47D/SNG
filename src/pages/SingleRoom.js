import React, { useEffect } from "react";
import Banner from "../components/Common/Banner";
import SingleRoomSec from "../components/Room/SingleRoomSec";

function SingleRoom() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";
  }, []);
  return (
    <div>
      <Banner title="Single Rooms" home="Home" bread="Single Rooms" />
      <SingleRoomSec />
    </div>
  );
}

export default SingleRoom;
