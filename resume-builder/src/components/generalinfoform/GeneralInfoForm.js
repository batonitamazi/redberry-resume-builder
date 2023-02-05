import React from "react";
import { Form, Formik } from "formik";
import { validationSchemas } from "../../helpers/validations";
import "./generalinfoform.css";

function GeneralInfoForm({
  initialValues,
  formValues,
  setFormValues,
  getValues,
}) {
  return (
    <Formik
      validationSchema={validationSchemas["generalInformation"]}
      initialValues={initialValues}
      onSubmit={getValues}
    >
      {({
        errors,
        touched,
        handleSubmit,
        handleChange,
        values,
        setFieldValue,
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
                className="input--field"
                type="text"
                placeholder="სახელი"
                onChange={(e) => {
                  setFieldValue("name", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, name: e.target.value };
                  });
                }}
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </label>
            <label htmlFor="surname" className="input--label">
              გვარი
              <input
                id="surname"
                name="surname"
                className="input--field"
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
                <div>{errors.surname}</div>
              ) : null}
            </label>
          </div>
          <label htmlFor="image">
            პირადი ფოტოს ატვირთვა
            <input
              id="image"
              name="image"
              type="file"
              onChange={(e) => {
                setFieldValue("image", e.target.value);
                setFormValues((prevstate) => {
                  return { ...prevstate, image: e.target.value };
                });
              }}
            />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}
          </label>
          <label htmlFor="aboutMe" className="input--label-full">
            ჩემს შესახებ(არასავალდებულო)
            <textarea
              id="aboutMe"
              name="aboutMe"
              className="input--field"
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
              <div>{errors.aboutMe}</div>
            ) : null}
          </label>
          <label htmlFor="email" className="input--label-full">
            ელ-ფოსტა
            <input
              id="email"
              name="email"
              className="input--field"
              type="text"
              placeholder="anzor777@redberry.ge"
              onChange={(e) => {
                setFieldValue("email", e.target.value);
                setFormValues((prevstate) => {
                  return { ...prevstate, email: e.target.value };
                });
              }}
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </label>
          <label htmlFor="phone" className="input--label-full">
            მობილურის ნომერი
            <input
              id="phone"
              name="phone"
              className="input--field"
              type="text"
              placeholder="+995 555 55 55 55"
              onChange={(e) => {
                setFieldValue("phone", e.target.value);
                setFormValues((prevstate) => {
                  return { ...prevstate, phone: e.target.value };
                });
              }}
            />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
          </label>
          <button type="submit">შემდეგი</button>
        </Form>
      )}
    </Formik>
  );
}

export default GeneralInfoForm;
