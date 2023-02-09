import React from "react";
import { validationSchemas } from "../../helpers/validations";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

import "./experienceform.css";

function ExperienceForm({
  initialValues,
  getValues,
  navigate,
  setFormValues,
  formValues,
}) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        // validationSchema={validationSchemas["experienceInformation"]}
        onSubmit={getValues}
      >
        {({ values, handleSubmit, errors, touched, setFieldValue }) => (
          <Form
            onSubmit={(values) => {
              console.log(errors);
              handleSubmit(values);
            }}
          >
            <FieldArray name="experiences">
              {({ push }) => (
                <div>
                  {values.experiences.length > 0 &&
                    values.experiences.map((experience, index) => (
                      <div key={index}>
                        <label
                          htmlFor={`experiences.${index}.position`}
                          className="input--label-full"
                        >
                          თანამდებობა
                          <Field
                            name={`experiences.${index}.position`}
                            placeholder="დეველოპერი, დიზაინერი, ა.შ"
                            type="text"
                            className={
                              errors.position && touched.position
                                ? "input--field--error"
                                : "input--field"
                            }
                            onChange={(e) => {
                              setFieldValue(
                                `experiences.${index}.position`,
                                e.target.value
                              );
                              setFormValues((prevstate) => {
                                const newState = structuredClone(prevstate);
                                newState.experiences[index].position =
                                  e.target.value;
                                return newState;
                              });
                            }}
                          />
                          {errors.position && touched.position ? (
                            <div className="error_message">
                              {errors.position}
                            </div>
                          ) : null}
                        </label>
                        <label
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
                        </label>
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

{
  /* <Formik
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
    </Formik> */
}
