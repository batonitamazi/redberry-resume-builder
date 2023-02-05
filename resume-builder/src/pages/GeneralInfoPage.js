import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Field, Form, Formik } from "formik";
// import { validationSchemas } from "../helpers/validations";
import ResumeSideBar from "../components/resumeSideBar/ResumeSideBar";
import PageHeader from "../components/pageheader/PageHeader";
import GeneralInfoForm from "../components/generalinfoform/GeneralInfoForm";

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
  return (
    <div className="form--page">
      <div className="form--container">
        <PageHeader navigate={navigate}/>
        <GeneralInfoForm initialValues={initialValues} setFormValues={setFormValues} getValues={getValues} />
      </div>
      <ResumeSideBar generalInfo={formValues}/>
    </div>
  );
}

export default GeneralInfoPage;
