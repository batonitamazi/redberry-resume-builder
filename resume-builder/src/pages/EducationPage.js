import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { validationSchemas } from "../helpers/validations";
import ResumeSideBar from "../components/resumeSideBar/ResumeSideBar";

const initialValues = {
  school: "",
  degree: "",
  endDate: "",
  description: "",
};

function EducationPage() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState();
  const getValues = (values) => {
    console.log(values);
    localStorage.setItem("educationInformation", JSON.stringify(formValues));
    navigate("/resume");
  };
  useEffect(() => {
    if (formValues) {
      localStorage.setItem("educationInformation", JSON.stringify(formValues));
    }
  }, [formValues]);
  return (
    <div className="form--page">
      <div>
        EducationPage
        <button onClick={() => navigate("/experience")}>უკან</button>
        <button onClick={() => navigate("/general-information")}>უკან</button>
        <Formik
          validationSchema={validationSchemas["educationInformation"]}
          initialValues={initialValues}
          onSubmit={getValues}
        >
          {({ errors, touched, handleSubmit, values, setFieldValue }) => (
            <Form
              onSubmit={(values) => {
                console.log(errors);
                handleSubmit(values);
              }}
            >
              <Field
                name="school"
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
              <Field
                name="degree"
                onChange={(e) => {
                  setFieldValue("degree", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, degree: e.target.value };
                  });
                }}
              />
              {errors.degree && touched.degree ? (
                <div>{errors.degree}</div>
              ) : null}
              <Field
                name="endDate"
                type="date"
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
              <Field
                name="description"
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
              <button type="submit">შემდეგი</button>
            </Form>
          )}
        </Formik>
      </div>
      <ResumeSideBar educationalInfo={formValues}/>
    </div>
  );
}

export default EducationPage;
