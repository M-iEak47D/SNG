import React, { useState, useEffect, Component } from "react";
import WhereTo from "./WhereTo";
import {
  Formik,
  Field,
  Form,
  setFieldValue,
  ErrorMessage,
  FieldArray,
} from "formik";
import * as Yup from "yup";
import { addDays, set, format } from "date-fns";
import FormikControl from "../Formik/FormikControl";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import axiosInstance from "../../helper/axios";

function SearchBar() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 1));

  console.log(startDate);

  const initialValues = {
    occupancy: [{ adult: 1, child: 0, id: "" + Math.random() }],
    selectionRange: {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    },
  };
  const validationSchema = Yup.object({
    destination: Yup.string().required("This Field Cannot be Empty"),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.table("form data", values);
    axiosInstance
      .post("/booking", values)
      .then((response) => {
        onSubmitProps.resetForm();
        console.log(response, "hello");
      })
      .error((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <div className="search-wrapper" id="searchBar">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(formik) => (
            <Form>
              <div className="bottom-search-bar d-none d-lg-flex">
                <FormikControl
                  control="datepicker"
                  type="text"
                  name="selectionRange"
                  startDate={initialValues.selectionRange.startDate}
                  endDate={initialValues.selectionRange.endDate}
                />
                <FormikControl control="occupancy" name="occupancy" />

                <div className="button-container">
                  <div className="search-button">
                    <button type="submit">Search</button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>

        <WhereTo />
      </div>
    </div>
  );
}

export default SearchBar;
