import React from "react";
import Banner from "../components/Common/Banner";
import SingleRoomSec from "../components/Room/SingleRoomSec";

function SingleRoom() {
  return (
    <div>
      <Banner title="Single Rooms" home="Home" bread="Single Rooms" />
      <SingleRoomSec />
    </div>
  );
}

export default SingleRoom;
