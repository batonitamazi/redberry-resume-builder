import { ErrorMessage, FieldArray } from "formik";
import React from "react";
import ExperienceFormInput from "../experienceform/ExperienceFormInput";

function EducationFieldArray({
  values,
  setFieldValue,
  errors,
  touched,
  setFormValues,
}) {
  return (
    <FieldArray name="educations">
      {({ push }) => (
        <>
          {values.educations.length > 0 &&
            values.educations.map((education, index) => (
              <div key={index} className="form--inputs--container">
                <ExperienceFormInput
                  mainName={`educations.${index}.school`}
                  placeholder="სასწავლებელი"
                  className="input--label-full"
                  labelName="სასწავლებელი"
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  setFormValues={setFormValues}
                  index={index}
                  propertyName={`school`}
                  fieldName={`educations`}
                />
                <ErrorMessage name={`educations.${index}.school`} />
                <div className="group--container">
                  <ExperienceFormInput
                    mainName={`educations.${index}.degree`}
                    placeholder="ხარისხი"
                    className="input--label"
                    labelName="ხარისხი"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    setFormValues={setFormValues}
                    index={index}
                    propertyName={`degree`}
                    fieldName={`educations`}
                  />
                  <ErrorMessage name={`educations.${index}.degree`} />
                  <ExperienceFormInput
                    mainName={`educations.${index}.endDate`}
                    type="date"
                    placeholder="mm / dd / yyyy"
                    labelName="დამთავრების რიცხვი"
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                    setFormValues={setFormValues}
                    index={index}
                    propertyName={`endDate`}
                    fieldName={`educations`}
                  />
                  <ErrorMessage name={`educations.${index}.endDate`} />
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
                <ErrorMessage name={`educations.${index}.description`} />
                <div className="grey--line" style={{ marginTop: "58px" }}></div>
              </div>
            ))}
          <div className="moreField--btn--container">
            <button
              className="more__field__btn"
              type="button"
              onClick={() => {
                push({
                  school: "",
                  degree: "",
                  endDate: "",
                  description: "",
                });
                setFormValues((prevstate) => {
                  const newState = structuredClone(prevstate);
                  newState.educations.push({
                    school: "",
                    degree: "",
                    endDate: "",
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
