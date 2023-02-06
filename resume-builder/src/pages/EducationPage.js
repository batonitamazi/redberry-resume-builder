import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResumeSideBar from "../components/resumeSideBar/ResumeSideBar";
import PageHeader from "../components/pageheader/PageHeader";
import EducationForm from '../components/educationform/EducationForm'
const initialValues = {
  school: "",
  degree: "",
  endDate: "",
  description: "",
};

function EducationPage() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState();
  const getValues = (values) => {
    localStorage.setItem("educationInformation", JSON.stringify(formValues));
    navigate("/resume");
  };
  useEffect(() => {
    if (formValues) {
      localStorage.setItem("educationInformation", JSON.stringify(formValues));
    }
  }, [formValues]);
  return (
    <div className="form--page">
      <div className="form--container">
        <PageHeader navigate={navigate} header="განათლება" pagesize="3/3"/>
        <EducationForm initialValues={initialValues} setFormValues={setFormValues} getValues={getValues} navigate={navigate}/>
      </div>
      <ResumeSideBar educationalInfo={formValues}/>
    </div>
  );
}

export default EducationPage;
