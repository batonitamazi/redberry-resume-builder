import React from "react";
import { FieldArray, ErrorMessage } from "formik";
import ExperienceFormInput from "./ExperienceFormInput";

function ExperienceFieldArray({
  values,
  setFieldValue,
  errors,
  touched,
  setFormValues,
}) {
  return (
    <FieldArray name="experiences">
      {({ push }) => (
        <>
          {values.experiences.length > 0 &&
            values.experiences.map((experience, index) => (
              <div key={index} className="fieldArray-container">
                <ExperienceFormInput
                  mainName={`experiences.${index}.position`}
                  placeholder="დეველოპერი, დიზაინერი, ა.შ"
                  className="input--label-full"
                  labelName="თანამდებობა"
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  setFormValues={setFormValues}
                  index={index}
                  propertyName={`position`}
                  fieldName={`experiences`}
                />
                <ErrorMessage name={`experiences.${index}.position`} />
                <ExperienceFormInput
                  mainName={`experiences.${index}.employer`}
                  placeholder="დამსაქმებელი"
                  className="input--label-full"
                  labelName="დამსაქმებელი"
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  setFormValues={setFormValues}
                  index={index}
                  propertyName={`employer`}
                  fieldName={`experiences`}
                />
                <ErrorMessage name={`experiences.${index}.employer`} />
                <div className="group--container">
                  <ExperienceFormInput
                    mainName={`experiences.${index}.startDate`}
                    placeholder="mm / dd / yyyy"
                    type="date"
                    labelName="დაწყების რიცხვი"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    setFormValues={setFormValues}
                    index={index}
                    propertyName={`startDate`}
                    fieldName={`experiences`}
                  />
                  <ErrorMessage name={`experiences.${index}.startDate`} />
                  <ExperienceFormInput
                    mainName={`experiences.${index}.endDate`}
                    type="date"
                    placeholder="mm / dd / yyyy"
                    labelName="დამთავრების რიცხვი"
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                    setFormValues={setFormValues}
                    index={index}
                    propertyName={`endDate`}
                    fieldName={`experiences`}
                  />
                  <ErrorMessage name={`experiences.${index}.endDate`} />
                </div>
                <ExperienceFormInput
                  mainName={`experiences.${index}.description`}
                  className="input--label-full"
                  placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                  labelName="აღწერა"
                  setFieldValue={setFieldValue}
                  errors={errors}
                  touched={touched}
                  setFormValues={setFormValues}
                  index={index}
                  propertyName={`description`}
                  fieldName={`experiences`}
                  inputClassName="textarea--field"
                />
                <ErrorMessage name={`experiences.${index}.description`} />
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
                  const newState = structuredClone(prevstate);
                  newState.experiences.push({
                    position: "",
                    employer: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  });
                  return newState;
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
  );
}

export default ExperienceFieldArray;
