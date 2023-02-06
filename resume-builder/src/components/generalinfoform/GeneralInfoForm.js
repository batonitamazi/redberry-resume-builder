import React from "react";
import { Form, Formik } from "formik";
import { validationSchemas } from "../../helpers/validations";
import "./generalinfoform.css";

function GeneralInfoForm({ initialValues, setFormValues, getValues }) {
  return (
    <Formik
      validationSchema={validationSchemas["generalInformation"]}
      initialValues={initialValues}
      onSubmit={getValues}
      enableReinitialize={true}
    >
      {({
        errors,
        touched,
        handleSubmit,
        handleChange,
        values,
        setFieldValue,
        formValues,
      }) => (
        <Form
          onSubmit={(values) => {
            console.log(errors);
            handleSubmit(values);
          }}
          className="form--card"
        >
          <div className="group--container">
            <label htmlFor="name" className="input--label">
              სახელი
              <input
                id="name"
                name="name"
                className={errors.name ? "input--field--error" : "input--field"}
                type="text"
                placeholder="სახელი"
                defaultValue={initialValues?.name}
                onChange={(e) => {
                  setFieldValue("name", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, name: e.target.value };
                  });
                }}
              />
              {errors.name && touched.name ? (
                <div className="error_message">{errors.name}</div>
              ) : null}
            </label>
            <label htmlFor="surname" className="input--label">
              გვარი
              <input
                id="surname"
                name="surname"
                defaultValue={initialValues?.surname}
                className={
                  errors.surname ? "input--field--error" : "input--field"
                }
                type="text"
                placeholder="გვარი"
                onChange={(e) => {
                  setFieldValue("surname", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, surname: e.target.value };
                  });
                }}
              />
              {errors.surname && touched.surname ? (
                <div className="error_message">{errors.surname}</div>
              ) : null}
            </label>
          </div>
          <div className="image--container">
            <label htmlFor="image">
              პირადი ფოტოს ატვირთვა
              <input
                id="image"
                name="image"
                type="file"
                defaultValue={initialValues?.image}
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setFieldValue("image", reader.result);
                    setFormValues((prevstate) => {
                      return { ...prevstate, image: reader.result };
                    });
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </label>
            {errors.image && touched.image ? (
              <div className="error_message">{errors.image}</div>
            ) : null}
          </div>
          <label htmlFor="aboutMe" className="input--label-full">
            ჩემს შესახებ(არასავალდებულო)
            <textarea
              id="aboutMe"
              name="aboutMe"
              defaultValue={initialValues?.aboutMe}
              className={
                errors.aboutMe
                  ? "input--field--error textarea--field"
                  : "input--field textarea--field"
              }
              type="text"
              placeholder="ზოგადი ინფო შენს შესახებ"
              onChange={(e) => {
                setFieldValue("aboutMe", e.target.value);
                setFormValues((prevstate) => {
                  return { ...prevstate, aboutMe: e.target.value };
                });
              }}
            />
            {errors.aboutMe && touched.aboutMe ? (
              <div className="error_message">{errors.aboutMe}</div>
            ) : null}
          </label>
          <label htmlFor="email" className="input--label-full">
            ელ-ფოსტა
            <input
              id="email"
              name="email"
              defaultValue={initialValues?.email}
              className={errors.email ? "input--field--error" : "input--field"}
              type="text"
              placeholder="anzor777@redberry.ge"
              onChange={(e) => {
                setFieldValue("email", e.target.value);
                setFormValues((prevstate) => {
                  return { ...prevstate, email: e.target.value };
                });
              }}
            />
            {errors.email && touched.email ? (
              <div className="error_message">{errors.email}</div>
            ) : null}
          </label>
          <label htmlFor="phone" className="input--label-full">
            მობილურის ნომერი
            <input
              id="phone"
              name="phone"
              defaultValue={initialValues?.phone}
              className={errors.phone ? "input--field--error" : "input--field"}
              type="text"
              placeholder="+995 555 55 55 55"
              onChange={(e) => {
                setFieldValue("phone", e.target.value);
                setFormValues((prevstate) => {
                  return { ...prevstate, phone: e.target.value };
                });
              }}
            />
            {errors.phone && touched.phone ? (
              <div className="error_message">{errors.phone}</div>
            ) : null}
          </label>
          <button type="submit" className="submit__btn">
            შემდეგი
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default GeneralInfoForm;
