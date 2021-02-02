import React, { useState, useEffect } from "react";
import Banner from "../components/Common/Banner";
import CheckoutSection from "../components/Checkout/CheckoutSection";
import { useParams, useLocation, useHistory } from "react-router-dom";

function Checkout() {
  const [roomData, setRoomData] = useState();
  const [formData, setFormData] = useState();

  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (location.state) {
      setRoomData(location.state.roomData);
      setFormData(location.state.formData);
    } else {
      history.push("/");
    }
  }, [location]);
  return (
    <div id="main">
      <Banner title="Checkout" home="Home" bread="Checkout" />
      <CheckoutSection room={roomData} form={formData} />
    </div>
  );
}

export default Checkout;
