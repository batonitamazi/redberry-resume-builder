import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import {validationSchemas} from '../../helpers/validations'
import ExperienceFormInput from "./ExperienceFormInput";

import "./experienceform.css";

function ExperienceForm({ initialValues, getValues, navigate, setFormValues }) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchemas["experienceInformation"]}
        onSubmit={getValues}
      >
        {({ values, handleSubmit, setFieldValue, errors, touched }) => (
          <Form
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            className="form--card"
          >
            <FieldArray name="experiences">
              {({ push }) => (
                <>
                  {values.experiences.length > 0 &&
                    values.experiences.map((experience, index) => (
                      <div key={index} className="fieldArray-container">
                        <ExperienceFormInput 
                          mainName={`experiences.${index}.position`}
                          errors={errors.position}
                          touched={touched.position}
                          placeholder="დეველოპერი, დიზაინერი, ა.შ"
                          className="input--label-full"
                          labelName="თანამდებობა"
                          setFieldValue={setFieldValue}
                          setFormValues={setFormValues}
                          index={index}
                          propertyName={`position`}
                          fieldName={`experiences`}
                        />
                        <ExperienceFormInput 
                          mainName={`experiences.${index}.position`}
                          errors={errors.employer}
                          touched={touched.employer}
                          placeholder="დამსაქმებელი"
                          className="input--label-full"
                          labelName="დამსაქმებელი"
                          setFieldValue={setFieldValue}
                          setFormValues={setFormValues}
                          index={index}
                          propertyName={`employer`}
                          fieldName={`experiences`}
                        />

                        {/* <label
                          htmlFor={`experiences.${index}.employer`}
                          className="input--label-full"
                        >
                          დამსაქმებელი
                          <Field
                            name={`experiences.${index}.employer`}
                            placeholder="დამსაქმებელი"
                            type="text"
                            className={
                              errors.employer && touched.employer
                                ? "input--field--error"
                                : "input--field"
                            }
                            onChange={(e) => {
                              setFieldValue(
                                `experiences.${index}.employer`,
                                e.target.value
                              );
                              setFormValues((prevstate) => {
                                const newState = structuredClone(prevstate);
                                newState.experiences[index].employer =
                                  e.target.value;
                                return newState;
                              });
                            }}
                          />
                          {errors.employer && touched.employer ? (
                            <div className="error_message">
                              {errors.employer}
                            </div>
                          ) : null}
                        </label> */}
                        <div className="group--container">
                          <label
                            htmlFor={`experiences.${index}.startDate`}
                            className="input--label"
                          >
                            დაწყების რიცხვი
                            <Field
                              name={`experiences.${index}.startDate`}
                              placeholder="mm / dd / yyyy"
                              type="date"
                              className={
                                errors.startDate && touched.startDate
                                  ? "input--field--error"
                                  : "input--field"
                              }
                              onChange={(e) => {
                                setFieldValue(
                                  `experiences.${index}.startDate`,
                                  e.target.value
                                );
                                setFormValues((prevstate) => {
                                  const newState = structuredClone(prevstate);
                                  newState.experiences[index].startDate =
                                    e.target.value;
                                  return newState;
                                });
                              }}
                            />
                            {errors.startDate && touched.startDate ? (
                              <div className="error_message">
                                {errors.startDate}
                              </div>
                            ) : null}
                          </label>
                          <label
                            htmlFor={`experiences.${index}.endDate`}
                            className="input--label"
                          >
                            დამთავრების რიცხვი
                            <Field
                              name={`experiences.${index}.endDate`}
                              placeholder="mm / dd / yyyy"
                              type="date"
                              className={
                                errors.endDate && touched.endDate
                                  ? "input--field--error"
                                  : "input--field"
                              }
                              onChange={(e) => {
                                setFieldValue(
                                  `experiences.${index}.endDate`,
                                  e.target.value
                                );
                                setFormValues((prevstate) => {
                                  const newState = structuredClone(prevstate);
                                  newState.experiences[index].endDate =
                                    e.target.value;
                                  return newState;
                                });
                              }}
                            />
                            {errors.endDate && touched.endDate ? (
                              <div className="error_message">
                                {errors.endDate}
                              </div>
                            ) : null}
                          </label>
                        </div>
                        <label
                          htmlFor={`experiences.${index}.description`}
                          className="input--label-full"
                        >
                          აღწერა
                          <Field
                            name={`experiences.${index}.description`}
                            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                            type="text"
                            className={
                              errors.description && touched.description
                                ? "input--field--error textarea--field"
                                : "input--field textarea--field"
                            }
                            onChange={(e) => {
                              setFieldValue(
                                `experiences.${index}.description`,
                                e.target.value
                              );
                              setFormValues((prevstate) => {
                                const newState = structuredClone(prevstate);
                                newState.experiences[index].description =
                                  e.target.value;
                                return newState;
                              });
                            }}
                          />
                          {errors.description && touched.description ? (
                            <div className="error_message">
                              {errors.description}
                            </div>
                          ) : null}
                        </label>
                      </div>
                    ))}
                  <div className="grey--line"></div>
                  <div className="moreField--btn--container">
                    <button
                      className="more__field__btn"
                      onClick={() => {
                        push({
                          position: "",
                          employer: "",
                          startDate: "",
                          endDate: "",
                          description: "",
                        });
                        setFormValues((prevstate) => {
                          prevstate.experiences.push({
                            position: "",
                            employer: "",
                            startDate: "",
                            endDate: "",
                            description: "",
                          });
                          console.log(prevstate);
                          return prevstate;
                        });
                      }}
                      type="button"
                    >
                      მეტი გამოცდილების დამატება
                    </button>
                  </div>
                </>
              )}
            </FieldArray>
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
    </>
  );
}

export default ExperienceForm;
