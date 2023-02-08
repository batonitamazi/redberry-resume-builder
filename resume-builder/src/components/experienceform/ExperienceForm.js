import React from "react";
import { Form, Formik } from "formik";
import { validationSchemas } from "../../helpers/validations";
import "./experienceform.css";

function ExperienceForm({ initialValues, setFormValues, getValues, navigate }) {
  return (
    <Formik
      validationSchema={validationSchemas["experienceInformation"]}
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
          <label htmlFor="position" className="input--label-full">
            თანამდებობა
            <input
              id="position"
              name="position"
              className={
                errors.position && touched.position
                  ? "input--field--error"
                  : "input--field"
              }
              type="text"
              defaultValue={initialValues?.position}
              placeholder="თანამდებობა"
              onChange={(e) => {
                setFieldValue("position", e.target.value);
                setFormValues((prevstate) => {
                  return { ...prevstate, position: e.target.value };
                });
              }}
            />
            {errors.position && touched.position ? (
              <div className="error_message">{errors.position}</div>
            ) : null}
          </label>
          <label htmlFor="employer" className="input--label-full">
            დამსაქმებელი
            <input
              id="employer"
              name="employer"
              className={
                errors.employer && touched.employer
                  ? "input--field--error"
                  : "input--field"
              }
              defaultValue={initialValues?.employer}
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
              <div className="error_message">{errors.position}</div>
            ) : null}
          </label>
          <div className="group--container">
            <label htmlFor="startDate" className="input--label">
              დაწყების რიცხვი
              <input
                id="startDate"
                name="startDate"
                type="date"
                className={
                  errors.startDate && touched.startDate
                    ? "input--field--error"
                    : "input--field"
                }
                defaultValue={initialValues?.startDate}
                placeholder="mm/dd/yyyy"
                onChange={(e) => {
                  setFieldValue("startDate", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, startDate: e.target.value };
                  });
                }}
              />
              {errors.startDate && touched.startDate ? (
                <div className="error_message">{errors.startDate}</div>
              ) : null}
            </label>
            <label htmlFor="endDate" className="input--label">
              დამთავრების რიცხვი
              <input
                id="endDate"
                name="endDate"
                type="date"
                className={
                  errors.endDate && touched.endDate
                    ? "input--field--error"
                    : "input--field"
                }
                defaultValue={initialValues?.endDate}
                placeholder="mm/dd/yyyy"
                onChange={(e) => {
                  setFieldValue("endDate", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, endDate: e.target.value };
                  });
                }}
              />
              {errors.endDate && touched.endDate ? (
                <div className="error_message">{errors.endDate}</div>
              ) : null}
            </label>
          </div>
          <label htmlFor="description" className="input--label-full">
            აღწერა
            <textarea
              id="description"
              name="description"
              type="text"
              className={
                errors.description && touched.description
                  ? "input--field--error textarea--field"
                  : "input--field textarea--field"
              }
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
              <div className="error_message">{errors.description}</div>
            ) : null}
          </label>
          <div className="grey--line"></div>
          <div className="moreField--btn--container">
            <button className="more__field__btn">
              მეტი გამოცდილების დამატება
            </button>
          </div>
          <div className="form--actions">
            <button
              className="submit__btn"
              onClick={() => navigate("/general-information")}
            >
              უკან
            </button>
            <button type="submit" className="submit__btn">
              შემდეგი
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ExperienceForm;
