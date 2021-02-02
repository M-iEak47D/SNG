import React from "react";
import { Formik, Form, Field } from "formik";
import FormikControl from "../Formik/FormikControl";
import * as Yup from "yup";
import axiosInstance from "../../helper/axios";

function CheckoutForm({ roomData, formData }) {
  const regionOption = [
    { key: "Country or Region", value: "" },
    { key: "Nepal", value: "nepal" },
  ];
  const radioOption = [
    { key: "Mr.", value: "male" },
    { key: "Mrs.", value: "female" },
    { key: "Other", value: "others" },
  ];
  const initialValues = {
    room_id: "",
    room_price: "",
    radioOption: "",
    first_name: "",
    last_name: "",
    email: "",
    contact: "",
    message: "",
    regionOption: "",
    occupancy: "",
    startDate: "",
    endDate: "",
  };
  const validationSchema = Yup.object({
    radioOption: Yup.string().required("Gender is required"),
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required"),
    contact: Yup.string().required("Contact is required"),
    regionOption: Yup.string().required("Region is required"),
  });

  function onSubmit(data) {
    data.room_id = roomData && roomData.id;
    data.room_price = roomData && roomData.price;
    data.occupancy = formData && formData.occupancy;
    data.startDate = formData && formData.startDate;
    data.endDate = formData && formData.endDate;

    axiosInstance
      .post("/create/booking", data)
      .then((response) => {
        console.log(response, "res");
      })
      .error((response) => {
        // setLoadings(false);
      });
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <div className="form-group radio">
              <FormikControl
                control="radio"
                options={radioOption}
                name="radioOption"
              />
            </div>
            <div className="form-group">
              <FormikControl
                control="firstName"
                type="text"
                name="first_name"
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <FormikControl
                control="lastName"
                type="text"
                name="last_name"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <FormikControl
                control="email"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <FormikControl
                control="contact"
                type="text"
                name="contact"
                placeholder="Phone Number"
              />
            </div>
            <div className="form-group">
              <FormikControl
                control="message"
                name="message"
                placeholder="Your message"
              />
            </div>

            <div className="form-group">
              <FormikControl
                control="select"
                name="regionOption"
                options={regionOption}
              />
              {/* <select class="form-control" id="select">
                <option>Country or Region</option>
                <option>Nepal</option>
              </select> */}
            </div>
            <div class="form-btn">
              <button type="submit"> Book Now </button>
            </div>
          </Form>
        )}
      </Formik>
      <div>
        <form action="https://uat.esewa.com.np/epay/main" method="POST">
          <input value="100" name="tAmt" type="hidden" />
          <input value="90" name="amt" type="hidden" />
          <input value="5" name="txAmt" type="hidden" />
          <input value="2" name="psc" type="hidden" />
          <input value="3" name="pdc" type="hidden" />
          <input value="EPAYTEST" name="scd" type="hidden" />
          <input
            value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453"
            name="pid"
            type="hidden"
          />
          <input
            value="http://merchant.com.np/page/esewa_payment_success?q=su"
            type="hidden"
            name="su"
          />
          <input
            value="http://merchant.com.np/page/esewa_payment_failed?q=fu"
            type="hidden"
            name="fu"
          />
          <input value="Pay with eSewa" type="submit" class=" esewa_btn" />
        </form>
      </div>
    </>
  );
}

export default CheckoutForm;
