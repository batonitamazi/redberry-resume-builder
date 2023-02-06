import React from "react";
import { Field, Form, Formik } from "formik";
import { validationSchemas } from "../../helpers/validations";
import './experienceform.css';

function ExperienceForm({
  initialValues,
  formValues,
  setFormValues,
  getValues,
  navigate
}) {
  return (
    <>
      <Formik
        validationSchema={validationSchemas["experienceInformation"]}
        initialValues={initialValues}
        onSubmit={getValues}
      >
        {({
          errors,
          touched,
          handleSubmit,
          handleChange,
          values,
          setFieldValue,
        }) => (
          <Form
            onSubmit={(values) => {
              console.log(errors);
              handleSubmit(values);
            }}
            className="form--card"
          >
            <label htmlFor="position" className="input--label-full">
              თანამდებობა
              <input
                id="position"
                name="position"
                className="input--field"
                type="text"
                placeholder="თანამდებობა"
                onChange={(e) => {
                  setFieldValue("position", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, position: e.target.value };
                  });
                }}
              />
              {errors.position && touched.position ? (
                <div>{errors.position}</div>
              ) : null}
            </label>
            <label htmlFor="employer" className="input--label-full">
              დამსაქმებელი
              <input
                id="employer"
                name="employer"
                className="input--field"
                type="text"
                placeholder="დამსაქმებელი"
                onChange={(e) => {
                  setFieldValue("employer", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, employer: e.target.value };
                  });
                }}
              />
              {errors.position && touched.position ? (
                <div>{errors.position}</div>
              ) : null}
            </label>
            <div className="group--container">
              <label htmlFor="startDate" className="input--label">
                დაწყების რიცხვი
                <input
                  id="startDate"
                  name="startDate"
                  type="date"
                  className="input--field"
                  placeholder="mm/dd/yyyy"
                  onChange={(e) => {
                    setFieldValue("startDate", e.target.value);
                    setFormValues((prevstate) => {
                      return { ...prevstate, startDate: e.target.value };
                    });
                  }}
                />
                {errors.startDate && touched.startDate ? (
                  <div>{errors.startDate}</div>
                ) : null}
              </label>
              <label htmlFor="endDate" className="input--label">
                დამთავრების რიცხვი
                <Field
                  id="endDate"
                  name="endDate"
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
              <textarea
                id="description"
                name="description"
                className="input--field textarea--field"
                type="text"
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
      <button className="submit__btn position__btn" onClick={() => navigate("/general-information")}>უკან</button>
    </>
  );
}

export default ExperienceForm;
