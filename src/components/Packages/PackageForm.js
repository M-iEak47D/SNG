import { React, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";
import axiosInstance from "../../helper/axios";
import { addDays, format, set } from "date-fns";

function PackageForm(props) {
  const [startDate, setStartDate] = useState(new Date());

  const initialValues = {
    id: "",
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
    // props.setSending(true);
    props.modal();
    var dateData = format(values.datepick, "yyyy-MM-d");
    values.datepick = dateData;
    values.id = props.packageId;
    axiosInstance
      .post("/package-submit", values)
      .then((response) => {
        onSubmitProps.resetForm();
        props.setSending(false);
        props.setMessage(true);
        setTimeout(function () {
          props.setMessage(false);
        }, 2000);
      })
      .error((response) => {
        // setLoadings(false);
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
              <button className="btn btn-primary">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PackageForm;
