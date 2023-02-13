import React from "react";
import { FieldArray} from "formik";
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
              <div key={index} className="form--inputs--container">
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

                <div className="group--container">
                  <ExperienceFormInput
                    mainName={`experiences.${index}.start_date`}
                    placeholder="mm / dd / yyyy"
                    type="date"
                    labelName="დაწყების რიცხვი"
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    setFormValues={setFormValues}
                    index={index}
                    propertyName={`start_date`}
                    fieldName={`experiences`}
                  />

                  <ExperienceFormInput
                    mainName={`experiences.${index}.due_date`}
                    type="date"
                    placeholder="mm / dd / yyyy"
                    labelName="დამთავრების რიცხვი"
                    setFieldValue={setFieldValue}
                    errors={errors}
                    touched={touched}
                    setFormValues={setFormValues}
                    index={index}
                    propertyName={`due_date`}
                    fieldName={`experiences`}
                  />
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
                <div className="grey--line" style={{ marginTop: "58px" }}></div>
              </div>
            ))}
          <div className="moreField--btn--container">
            <button
              className="more__field__btn"
              onClick={() => {
                push({
                  position: "",
                  employer: "",
                  start_date: "",
                  due_date: "",
                  description: "",
                });
                setFormValues((prevstate) => {
                  const newState = structuredClone(prevstate);
                  newState.experiences.push({
                    position: "",
                    employer: "",
                    start_date: "",
                    due_date: "",
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
