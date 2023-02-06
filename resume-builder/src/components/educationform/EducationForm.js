import React from "react";
import {Form, Formik } from "formik";
import { validationSchemas } from "../../helpers/validations";
function EducationForm({ initialValues, setFormValues, getValues, navigate }) {
  return (
    <>
      <Formik
        validationSchema={validationSchemas["educationInformation"]}
        initialValues={initialValues}
        onSubmit={getValues}
        enableReinitialize={true}
      >
        {({ errors, touched, handleSubmit, setFieldValue }) => (
          <Form
            onSubmit={(values) => {
              console.log(errors);
              handleSubmit(values);
            }}
            className="form--card"
          >
            <label htmlFor="school" className="input--label-full">
              სასწავლებელი
              <input
                id="school"
                name="school"
                className="input--field"
                type="text"
                placeholder="სასწავლებელი"
                defaultValue={initialValues?.school}
                onChange={(e) => {
                  setFieldValue("school", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, school: e.target.value };
                  });
                }}
              />
              {errors.school && touched.school ? (
                <div>{errors.school}</div>
              ) : null}
            </label>
            <div className="group--container">
              <label htmlFor="degree" className="input--label">
                ხარისხი
                <input
                  id="degree"
                  name="degree"
                  className="input--field"
                  type="text"
                  defaultValue={initialValues?.degree}
                  placeholder="ხარისხი"
                  onChange={(e) => {
                    setFieldValue("degree", e.target.value);
                    setFormValues((prevstate) => {
                      return { ...prevstate, degree: e.target.value };
                    });
                  }}
                />
                {errors.degree && touched.degree ? (
                  <div className="error_message">{errors.degree}</div>
                ) : null}
              </label>
              <label htmlFor="endDate" className="input--label">
                დამთავრების რიცხვი
                <input
                  id="endDate"
                  name="endDate"
                  defaultValue={initialValues?.endDate}
                  type="date"
                  className="input--field"
                  placeholder="mm/dd/yyyy"
                  onChange={(e) => {
                    setFieldValue("endDate", e.target.value);
                    setFormValues((prevstate) => {
                      return { ...prevstate, endDate: e.target.value };
                    });
                  }}
                />
                {errors.endDate && touched.endDate ? (
                  <div>{errors.endDate}</div>
                ) : null}
              </label>
            </div>
            <label htmlFor="description" className="input--label-full">
              აღწერა
              <input
                id="description"
                name="description"
                className="input--field textarea--field"
                type="text"
                defaultValue={initialValues?.description}
                placeholder="როლი თანამდებობაზე"
                onChange={(e) => {
                  setFieldValue("description", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, description: e.target.value };
                  });
                }}
              />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
            </label>
            <button type="submit" className="submit__btn">
              შემდეგი
            </button>
          </Form>
        )}
      </Formik>
      <button
        className="submit__btn position__btn"
        onClick={() => navigate("/general-information")}
      >
        უკან
      </button>
    </>
  );
}

export default EducationForm;
