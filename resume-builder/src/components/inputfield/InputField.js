import React from "react";

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
          {errors && touched ? (
            <div className="error_message">{errors}</div>
          ) : null}
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
                  })
                };
                reader.readAsDataURL(file);
              }}
            />
          </label>
          {errors && touched ? (
            <div className="error_message">{errors}</div>
          ) : null}
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
          {errors && touched ? (
            <div className="error_message">{errors}</div>
          ) : null}
        </label>
      );
  }
}

export default InputField;
