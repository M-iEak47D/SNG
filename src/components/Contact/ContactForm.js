import { React, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl";
import axiosInstance from "../../helper/axios";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });
  // const onSubmit = (val) => console.log("form data", app);

  const onSubmit = (values, onSubmitProps) => {
    setLoading(true);
    axiosInstance
      .post("/contact/send", values)
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
            <div className="leave-message-person-detail">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <FormikControl control="name" type="input" name="name" />
                  </div>
                  <div className="col-md-4">
                    <FormikControl control="email" type="email" name="email" />
                  </div>
                  <div className="col-md-4">
                    <FormikControl
                      control="subject"
                      type="input"
                      name="subject"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="message-by-customer">
              <FormikControl control="message" name="message" />
            </div>
            <div className="message-submit-button">
              <button>
                {}
                SEND MESSAGE{" "}
                {loading && (
                  <span class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </span>
                )}
              </button>
            </div>
            {send && (
              <div className="send_message">
                <h3>Message Send Successfully</h3>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ContactForm;
