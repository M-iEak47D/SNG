import React, { useEffect } from "react";
import Banner from "../components/Common/Banner";
import RoomSection from "../components/Room/RoomSection";
import SearchRoom from "../components/Room/SearchRoom";

function Room() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="main">
      <Banner title="Single Rooms" home="Home" bread="Single Rooms" />
      {/* <RoomSection /> */}
      <SearchRoom />
    </div>
  );
}

export default Room;
