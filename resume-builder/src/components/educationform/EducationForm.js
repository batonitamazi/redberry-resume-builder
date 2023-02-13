import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import EducationFieldArray from "./EducationFieldArray";
function EducationForm({ initialValues, setFormValues, getValues, navigate, degrees }) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={getValues}
        enableReinitialize={true}
        validationSchema={Yup.object({
          educations: Yup.array()
            .of(
              Yup.object().shape({
                institute: Yup.string()
                  .required("სასწავლებელი სავალდებულო ველია")
                  .min(2, "მინიმუმ 2 სიმბოლო"),
                degree_id: Yup.string().required("ხარისხი სავალდებულო ველია"),
                due_date: Yup.date().required(
                  "დამთავრების თარიღი სავალდებულო ველია"
                ),
                description: Yup.string().required("აღწერა სავალდებულო ველია"),
              })
            )
            .required("სავალდებულოა"),
        })}
      >
        {({ values, errors, touched, handleSubmit, setFieldValue }) => (
          <Form
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            className="form--card"
          >
            <EducationFieldArray
              values={values}
              setFieldValue={setFieldValue}
              errors={errors}
              touched={touched}
              setFormValues={setFormValues}
              degrees={degrees}
            />
            <div className="form--actions">
              <button
                type="button"
                className="submit__btn"
                onClick={() => navigate("/experience")}
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
    </>
  );
}

export default EducationForm;
