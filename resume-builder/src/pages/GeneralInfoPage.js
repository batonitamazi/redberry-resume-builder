import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Field, Form, Formik } from "formik";
// import { validationSchemas } from "../helpers/validations";
import ResumeSideBar from "../components/resumeSideBar/ResumeSideBar";
import PageHeader from "../components/pageheader/PageHeader";
import GeneralInfoForm from "../components/generalinfoform/GeneralInfoForm";
const initialState = {
  name: "",
  surname: "",
  image: "",
  aboutMe: "",
  email: "",
  phone: "",
};

function GeneralInfoPage() {
  const [initialValues, setInitialValues] = useState(initialState);
  const [formValues, setFormValues] = useState(initialState);
  const navigate = useNavigate();
  const getValues = (values) => {
    localStorage.setItem("generalInformation", JSON.stringify(values));
    navigate("/experience");
  };
  useEffect(() => {
    if (formValues !== initialState) {
      localStorage.setItem("generalInformation", JSON.stringify(formValues));
      setInitialValues(
        JSON.parse(localStorage.getItem("generalInformation"))
      );
    }
  }, [formValues]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("generalInformation"))) {
      setInitialValues(JSON.parse(localStorage.getItem("generalInformation")));
      setFormValues(JSON.parse(localStorage.getItem("generalInformation")))
    }
  }, []);
  return (
    <div className="form--page">
      <div className="form--container">
        <PageHeader navigate={navigate} header="პირადი ინფო" pagesize="1/3" />
        <GeneralInfoForm
          initialValues={initialValues}
          setFormValues={setFormValues}
          getValues={getValues}
        />
      </div>
      <ResumeSideBar generalInfo={formValues} />
    </div>
  );
}

export default GeneralInfoPage;
