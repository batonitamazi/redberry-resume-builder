import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { validationSchemas } from "../helpers/validations";
import ResumeSideBar from "../components/resumeSideBar/ResumeSideBar";

const initialValues = {
  name: "",
  surname: "",
  image: "",
  aboutMe: "",
  email: "",
  phone: "",
};

function GeneralInfoPage() {
  const [formValues, setFormValues] = useState();
  const navigate = useNavigate();
  const getValues = (values) => {
    console.log(values);
    localStorage.setItem("generalInformation", JSON.stringify(formValues));
    navigate("/experience");
  };
  useEffect(() => {
    if (formValues) {
      localStorage.setItem("generalInformation", JSON.stringify(formValues));
    }
  }, [formValues]);
  console.log(formValues)
  return (
    <div className="form--page">
      <div>
        GeneralInfoPage
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
            >
              <Field
                name="name"
                onChange={(e) => {
                  setFieldValue("name", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, name: e.target.value };
                  });
                }}
              />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field
                name="surname"
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
              <Field
                name="image"
                type="file"
                onChange={(e) => {
                  setFieldValue("image", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, image: e.target.files[0] };
                  });
                }}
              />
              {errors.surname && touched.surname ? (
                <div>{errors.image}</div>
              ) : null}
              <Field
                name="aboutMe"
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
              <Field
                name="email"
                type="email"
                onChange={(e) => {
                  setFieldValue("email", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, email: e.target.value };
                  });
                }}
              />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <Field
                name="phone"
                onChange={(e) => {
                  setFieldValue("phone", e.target.value);
                  setFormValues((prevstate) => {
                    return { ...prevstate, phone: e.target.value };
                  });
                }}
              />
              {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
              <button type="submit">შემდეგი</button>
            </Form>
          )}
        </Formik>
      </div>
      <ResumeSideBar generalInfo={formValues}/>
    </div>
  );
}

export default GeneralInfoPage;
