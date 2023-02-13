import React from "react";
import { classnameSetter } from "../../helpers/classNameSetter";
import { ErrorMessage, Field } from "formik";

function DropDown({
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
  degrees,
}) {
  return (
    <label
      htmlFor={mainName}
      className={className ? className : "input--label"}
    >
      {labelName}
      <Field
        as="select"
        id={mainName}
        name={mainName}
        type={type ? type : "text"}
        className={classnameSetter(
          propertyName,
          errors,
          touched,
          fieldName,
          index
        )}
        onChange={(e) => {
          setFieldValue(`${mainName}`, e.target.value);
          setFormValues((prevstate) => {
            const newState = structuredClone(prevstate);
            newState[`${fieldName}`][`${index}`][`${propertyName}`] =
              e.target.value;
            return newState;
          });
        }}
      >
        {degrees?.map((option, i) => (
          <option key={i} value={option.id}>
            {option.title}
          </option>
        ))}
      </Field>
      <ErrorMessage name={mainName} component="div" className="error_message" />
    </label>
  );
}

export default DropDown;
