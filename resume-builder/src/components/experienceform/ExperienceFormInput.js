import React from "react";
import { Field } from "formik";
import ErrorField from "../errorField/ErrorField";
import { classnameSetter } from "../../helpers/classNameSetter";

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
  propertyName,
  type,
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
        type={type ? type : "text"}
        className={classnameSetter(propertyName, errors, touched, fieldName, index)}
        onChange={(e) => {
          setFieldValue(`${mainName}`, e.target.value);
          setFormValues((prevstate) => {
            const newState = structuredClone(prevstate);
            newState[`${fieldName}`][`${index}`][`${propertyName}`] =
              e.target.value;
            return newState;
          });
        }}
      />
    </label>
  );
}

export default ExperienceFormInput;
