import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { validationSchemas } from "../helpers/validations";

const initialValues = {
  name: "",
  surname: "",
  image: "",
  aboutMe: "",
  email: "",
  phone: "",
};

function GeneralInfoPage() {
  
  const [formValues, setFormValues] = useState(initialValues);
  const navigate = useNavigate();
  const getValues = (values) => {
    setFormValues(values);
  };
  return (
    <div>
      GeneralInfoPage
      <button onClick={() => navigate("/experience")}>შემდეგი</button>
      <Formik
        validationSchema={validationSchemas["generalInformation"]}
        initialValues={initialValues}
        onSubmit={getValues}
      >
        {({ errors, touched, handleSubmit, handleChange, values }) => {
          setFormValues(values)
          
          return (
            <Form
              onSubmit={(values) => {
                console.log(errors);
                handleSubmit(values);
              }}
            >
              <Field name="name" onChange={handleChange} />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field name="surname" onChange={handleChange} />
              {errors.surname && touched.surname ? (
                <div>{errors.surname}</div>
              ) : null}
              <Field name="image" type="file" onChange={handleChange} />
              {errors.surname && touched.surname ? (
                <div>{errors.image}</div>
              ) : null}
              <Field name="aboutMe" onChange={handleChange} />
              {errors.aboutMe && touched.aboutMe ? (
                <div>{errors.aboutMe}</div>
              ) : null}
              <Field name="email" type="email" onChange={handleChange} />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field name="phone" onChange={handleChange} />
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
      <div>
        <p>{formValues.name}</p>
        <p>{formValues.surname}</p>
        {formValues.image ? <img src={formValues.image} alt="employee img" /> : null}
        <p>{formValues.email}</p>
        <p>{formValues.aboutMe}</p>
        <p>{formValues.phone}</p>
      </div>
    </div>
  );
}

export default GeneralInfoPage;
