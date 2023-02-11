import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./experienceform.css";
import ExperienceFieldArray from "./ExperienceFieldArray";

function ExperienceForm({ initialValues, getValues, navigate, setFormValues }) {
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={Yup.object({
        experiences: Yup.array()
          .of(
            Yup.object().shape({
              position: Yup.string()
                .required("თანამდებობა სავალდებულო ველია")
                .min(2, "მინიმუმ 2 სიმბოლო"),
              employer: Yup.string()
                .required("დამსაქმებელი სავალდებულო ველია")
                .min(2, "მინიმუმ 2 სიმბოლო"),
              startDate: Yup.date().required(
                "დაწყების თარიღი სავალდებულო ველია"
              ),
              endDate: Yup.date().required(
                "დამთავრების თარიღი სავალდებულო ველია"
              ),
              description: Yup.string().required("აღწერა სავალდებულო ველია"),
            })
          )
          .required("სავალდებულოა"),
      })}
      onSubmit={getValues}
    >
      {({ values, handleSubmit, setFieldValue, errors, touched }) => (
        <Form
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          className="form--card"
        >
          <ExperienceFieldArray
            values={values}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            setFormValues={setFormValues}
          />
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
