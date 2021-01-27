import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../Error/TextError";

function Email(props) {
  const { name, ...rest } = props;
  return (
    <>
      <Field
        id={name}
        name={name}
        {...rest}
        placeholder="Email"
        className="form-control"
      />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
}

export default Email;
