import React from "react";
import { Form, Formik } from "formik";
import { validationSchemas } from "../../helpers/validations";
import "./generalinfoform.css";
import InputField from "../inputfield/InputField";

function GeneralInfoForm({ initialValues, setFormValues, getValues }) {
  return (
    <Formik
      enableReinitialize={true}
      validationSchema={validationSchemas["generalInformation"]}
      initialValues={initialValues}
      onSubmit={getValues}
    >
      {({ errors, touched, handleSubmit, setFieldValue }) => (
        <Form
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          className="form--card"
        >
          <div className="form--inputs--container">
            <div className="group--container">
              <InputField
                mainName="name"
                value={initialValues?.name}
                errors={errors.name}
                touched={touched.name}
                placeholder="სახელი"
                labelName="სახელი"
                setFieldValue={setFieldValue}
                setFormValues={setFormValues}
              />
              <InputField
                mainName="surname"
                value={initialValues?.surname}
                errors={errors.surname}
                touched={touched.surname}
                placeholder="გვარი"
                labelName="გვარი"
                setFieldValue={setFieldValue}
                setFormValues={setFormValues}
              />
            </div>
            <div className="image--container">
              <InputField
                mainName="image"
                value={initialValues?.image}
                errors={errors.image}
                touched={touched.image}
                labelName="პირადი ფოტოს ატვირთვა"
                setFieldValue={setFieldValue}
                setFormValues={setFormValues}
              />
            </div>
            <InputField
              mainName="aboutMe"
              value={initialValues?.aboutMe}
              errors={errors.aboutMe}
              touched={touched.aboutMe}
              labelName="ჩემს შესახებ(არასავალდებულო)"
              placeholder=""
              setFieldValue={setFieldValue}
              setFormValues={setFormValues}
              className="input--label-full"
            />
            <InputField
              mainName="email"
              value={initialValues?.email}
              errors={errors.email}
              touched={touched.email}
              labelName="ელ-ფოსტა"
              placeholder="anzor777@redberry.ge"
              setFieldValue={setFieldValue}
              setFormValues={setFormValues}
              className="input--label-full"
            />
            <InputField
              mainName="phone"
              value={initialValues?.phone}
              labelName="ნომერი"
              errors={errors.phone}
              touched={touched.phone}
              placeholder="+995 555 55 55 55"
              setFieldValue={setFieldValue}
              setFormValues={setFormValues}
              className="input--label-full"
            />
          </div>
          <button type="submit" className="submit__btn">
            შემდეგი
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default GeneralInfoForm;
