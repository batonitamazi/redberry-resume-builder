export const classnameSetter = (
  propertyName,
  errors,
  touched,
  fieldName,
  index
) => {
  const errorExist =
    errors &&
    errors[`${fieldName}`] &&
    errors[`${fieldName}`][`${index}`] &&
    errors[`${fieldName}`][`${index}`][`${propertyName}`];
  const touchExist =
    touched &&
    touched[`${fieldName}`] &&
    touched[`${fieldName}`][`${index}`] &&
    touched[`${fieldName}`][`${index}`][`${propertyName}`];
  if (String(propertyName) === "description") {
    if (errorExist && touchExist) {
      return "input--field--error textarea--field";
    } else {
      return "input--field textarea--field";
    }
  } else {
    if (errorExist && touchExist) {
      return "input--field--error";
    } else {
      return "input--field";
    }
  }
};
