import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { validationSchemas } from "../helpers/validations";
import ResumeSideBar from "../components/resumeSideBar/ResumeSideBar";

const initialValues = {
  position: "",
  employer: "",
  startDate: "",
  endDate: "",
  description: "",
};

function ExperiencesPage() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState();
  const getValues = (values) => {
    console.log(values);
    localStorage.setItem("experienceInformation", JSON.stringify(formValues));
    navigate("/education");
  };
  useEffect(() => {
    if (formValues) {
      localStorage.setItem("experienceInformation", JSON.stringify(formValues));
    }
  }, [formValues]);
  return (
    <div className="form--page">
      <div>
        ExperiencesPage
        <button onClick={() => navigate("/general-information")}>უკან</button>
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
            >
              <Field
                name="position"
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
              <Field
                name="employer"
                onChange={(e) => {
                  setFieldValue("employer", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, employer: e.target.value };
                  });
                }}
              />
              {errors.employer && touched.employer ? (
                <div>{errors.employer}</div>
              ) : null}
              <Field
                name="startDate"
                type="date"
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
      <ResumeSideBar experienceInfo={formValues}/>
    </div>
  );
}

export default ExperiencesPage;
