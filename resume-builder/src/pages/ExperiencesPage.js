import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from "formik";
import { validationSchemas } from "../helpers/validations";


function ExperiencesPage() {
  const navigate = useNavigate()
  const getValues = (values) => {
    console.log(values);
  };
  return (
    <div>ExperiencesPage
      <button onClick={() => navigate('/general-information')}>
        უკან
      </button>
      <button onClick={() => navigate('/education')}>
        შემდეგი
      </button>
      <Formik
        validationSchema={validationSchemas["experienceInformation"]}
        initialValues={{
          position: "",
          employer: "",
          startDate: "",
          endDate: "",
          description: "",
        }}
        onSubmit={getValues}
      >
        {({ errors, touched, handleSubmit, handleChange }) => (
          <Form
            onSubmit={(values) => {
              console.log(errors);
              handleSubmit(values);
            }}  
              >
            <Field name="position"  onChange={handleChange}/>
            {errors.position && touched.position ? <div>{errors.position}</div> : null}
            <Field name="surname"  onChange={handleChange}/>
            {errors.employer && touched.employer ? (
              <div>{errors.employer}</div>
            ) : null}
            <Field name="startDate"  type="date" onChange={handleChange}/>
            {errors.startDate && touched.startDate ? (
              <div>{errors.startDate}</div>
            ) : null}
            <Field name="endDate"  onChange={handleChange}/>
            {errors.endDate && touched.endDate ? (
              <div>{errors.endDate}</div>
            ) : null}
            <Field name="description" type="description"  onChange={handleChange}/>
            {errors.description && touched.description ? <div>{errors.description}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default ExperiencesPage