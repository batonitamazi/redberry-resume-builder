import { FieldArray } from "formik";
import React from "react";
import ExperienceFormInput from "../experienceform/ExperienceFormInput";
import DropDown from "./DropDown";

function EducationFieldArray({
  values,
  setFieldValue,
  errors,
  touched,
  setFormValues,
  degrees
}) {
  return (
    <FieldArray name="educations">
      {({ push }) => (
        <>
          {values.educations.length > 0 &&
            values.educations.map((education, index) => (
              <div key={index} className="form--inputs--container">
                <ExperienceFormInput
                  mainName={`educations.${index}.institute`}
                  placeholder="სასწავლებელი"
                  className="input--label-full"
                  labelName="სასწავლებელი"
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  setFormValues={setFormValues}
                  index={index}
                  propertyName={`institute`}
                  fieldName={`educations`}
                />
                <div className="group--container">
                  <DropDown
                    mainName={`educations.${index}.degree_id`}
                    placeholder="ხარისხი"
                    className="input--label"
                    labelName="ხარისხი"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    setFormValues={setFormValues}
                    index={index}
                    propertyName={`degree_id`}
                    fieldName={`educations`}
                    degrees={degrees}
                  />
                  {/* <ExperienceFormInput
                    mainName={`educations.${index}.degree_id`}
                    placeholder="ხარისხი"
                    className="input--label"
                    labelName="ხარისხი"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    setFormValues={setFormValues}
                    index={index}
                    propertyName={`degree_id`}
                    fieldName={`educations`}
                  /> */}
                  <ExperienceFormInput
                    mainName={`educations.${index}.due_date`}
                    type="date"
                    placeholder="mm / dd / yyyy"
                    labelName="დამთავრების რიცხვი"
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                    setFormValues={setFormValues}
                    index={index}
                    propertyName={`due_date`}
                    fieldName={`educations`}
                  />
                </div>
                <ExperienceFormInput
                  mainName={`educations.${index}.description`}
                  className="input--label-full"
                  placeholder="განათლების აღწერა"
                  labelName="აღწერა"
                  setFieldValue={setFieldValue}
                  errors={errors}
                  touched={touched}
                  setFormValues={setFormValues}
                  index={index}
                  propertyName={`description`}
                  fieldName={`educations`}
                  inputClassName="textarea--field"
                />
                <div className="grey--line" style={{ marginTop: "58px" }}></div>
              </div>
            ))}
          <div className="moreField--btn--container">
            <button
              className="more__field__btn"
              type="button"
              onClick={() => {
                push({
                  institute: "",
                  degree_id: "",
                  due_date: "",
                  description: "",
                });
                setFormValues((prevstate) => {
                  const newState = structuredClone(prevstate);
                  newState.educations.push({
                    institute: "",
                    degree_id: "",
                    due_date: "",
                    description: "",
                  });
                  return newState;
                });
              }}
            >
              სხვა სასწავლებლის დამატება
            </button>
          </div>
        </>
      )}
    </FieldArray>
  );
}

export default EducationFieldArray;
