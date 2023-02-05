import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/pageheader/PageHeader";
import ResumeSideBar from "../components/resumeSideBar/ResumeSideBar";
import ExperienceForm from '../components/experienceform/ExperienceForm'

const initialValues = {
  position: "",
  employer: "",
  startDate: "",
  endDate: "",
  description: "",
};

function ExperiencesPage() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState();
  const getValues = (values) => {
    console.log(values);
    localStorage.setItem("experienceInformation", JSON.stringify(formValues));
    navigate("/education");
  };
  useEffect(() => {
    if (formValues) {
      localStorage.setItem("experienceInformation", JSON.stringify(formValues));
    }
  }, [formValues]);
  return (
    <div className="form--page">
      <div className="form--container">
        <PageHeader navigate={navigate}/>
        <ExperienceForm initialValues={initialValues} setFormValues={setFormValues} getValues={getValues} navigate={navigate}/>
      </div>
      <ResumeSideBar experienceInfo={formValues}/>
    </div>
  );
}

export default ExperiencesPage;
