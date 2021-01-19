import React, { useEffect } from "react";
import Banner from "../components/Common/Banner";
import RoomSection from "../components/Room/RoomSection";

function Room() {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <Banner title="Single Rooms" bread="Single Rooms" />
      <RoomSection />
    </div>
  );
}

export default Room;
