import React from "react";
import ErrorField from "../errorField/ErrorField";

function InputField({
  mainName,
  value,
  errors,
  touched,
  placeholder,
  setFieldValue,
  setFormValues,
  labelName,
  className,
}) {
  switch (mainName) {
    case "aboutMe" || "description":
      return (
        <label
          htmlFor={mainName}
          className={className ? className : "input--label"}
        >
          {labelName}

          <textarea
            id={mainName}
            name={mainName}
            defaultValue={value}
            className={
              errors && touched
                ? "input--field--error textarea--field"
                : "input--field textarea--field"
            }
            type="text"
            placeholder={placeholder}
            onChange={(e) => {
              setFieldValue(mainName, e.target.value);
              setFormValues((prevstate) => {
                return { ...prevstate, [`${mainName}`]: e.target.value };
              });
            }}
          />
          <ErrorField errors={errors} touched={touched} />
        </label>
      );
    case "image":
      return (
        <>
          <label htmlFor={mainName}>
            {labelName}
            <input
              id={mainName}
              name={mainName}
              type="file"
              defaultValue={value}
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setFieldValue(mainName, reader.result);
                  setFormValues((prevstate) => {
                    return { ...prevstate, [`${mainName}`]: reader.result };
                  });
                };
                reader.readAsDataURL(file);
              }}
            />
          </label>
          <ErrorField errors={errors} touched={touched} />
        </>
      );
    default:
      return (
        <label
          htmlFor={mainName}
          className={className ? className : "input--label"}
        >
          {labelName}
          <input
            id={mainName}
            name={mainName}
            defaultValue={value}
            className={
              errors && touched ? "input--field--error" : "input--field"
            }
            type="text"
            placeholder={placeholder}
            onChange={(e) => {
              setFieldValue(mainName, e.target.value);
              setFormValues((prevstate) => {
                return { ...prevstate, [`${mainName}`]: e.target.value };
              });
            }}
          />
          <ErrorField errors={errors} touched={touched} />
        </label>
      );
  }
}

export default InputField;
