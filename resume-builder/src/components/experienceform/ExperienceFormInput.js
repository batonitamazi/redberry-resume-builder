import React from "react";
import { Field } from "formik";

function ExperienceFormInput({
  mainName,
  errors,
  touched,
  placeholder,
  setFieldValue,
  setFormValues,
  labelName,
  className,
  fieldName,
  index,
  propertyName
  
}) {
  return (
    <label
      htmlFor={mainName}
      className={className ? className : "input--label"}
    >
      {labelName}
      <Field
        id={mainName}
        name={mainName}
        placeholder={placeholder}
        type="text"
        className={errors && touched ? "input--field--error" : "input--field"}
        onChange={(e) => {
          setFieldValue(`${mainName}`, e.target.value);
          setFormValues((prevstate) => {
            const newState = structuredClone(prevstate);
            newState[`${fieldName}`][`${index}`][`${propertyName}`] = e.target.value;
            return newState;
          });
        }}
      />
    </label>
  );
}

export default ExperienceFormInput;
