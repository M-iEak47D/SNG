import { React, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";
import axiosInstance from "../../helper/axios";
import { addDays, format, set } from "date-fns";

function PackageForm(props) {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  // const [packageID, setPackageID] = useState(props.packageId);

  // setStartDate(format(startDate, "yyyy-MM-d"));
  console.log(props.packageId, "hello");

  const initialValues = {
    id: "1",
    name: "",
    email: "",
    contact: "",
    datepick: startDate,
    number: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    contact: Yup.string().required("Contact is required"),
    datepick: Yup.date().required("Date is required"),
    number: Yup.string().required("Number is required"),
    message: Yup.string().required("Message is required"),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    var dateData = format(values.datepick, "yyyy-MM-d");
    values.datepick = dateData;
    console.log(values, "new");
    // setLoading(true);
    axiosInstance
      .post("/package-submit", values)
      .then((response) => {
        setLoading(false);
        setSend(true);
        setTimeout(function () {
          setSend(false);
        }, 2000);
        onSubmitProps.resetForm();
        console.log(response, "hello");
      })
      .error((response) => {
        setLoading(false);
        console.log(response);
      });
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div className="modal-body">
              <Field type="hidden" name="id" className="form-control" />
              <p>Full name</p>
              <FormikControl
                control="name"
                type="text"
                name="name"
                placeholder="Enter Full Name"
              />

              <p>Email</p>
              <FormikControl
                control="email"
                type="email"
                name="email"
                placeholder="Enter Email"
              />

              <p>Contact</p>
              <FormikControl
                control="contact"
                type="text"
                name="contact"
                placeholder="Enter Contact"
              />

              <p>Your preferred tour date</p>
              <FormikControl
                control="datepick"
                name="datepick"
                placeholder="Enter Preferred Tour Date"
              />

              <p>Number of person</p>
              <FormikControl
                control="number"
                name="number"
                type="text"
                placeholder="Enter Number of Person"
              />

              <p>Enquiry Message</p>
              <FormikControl
                control="message"
                name="message"
                placeholder="Your message"
              />
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary">
                {}
                Submit{" "}
                {loading && (
                  <span class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </span>
                )}
              </button>
              {send && (
                <div className="send_message enquiry_message">
                  <h3>Message Send Successfully</h3>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PackageForm;
