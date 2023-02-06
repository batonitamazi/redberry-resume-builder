import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/pageheader/PageHeader";
import ResumeSideBar from "../components/resumeSideBar/ResumeSideBar";
import ExperienceForm from '../components/experienceform/ExperienceForm'


function ExperiencesPage() {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    position: "",
    employer: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [formValues, setFormValues] = useState();
  const getValues = (values) => {
    localStorage.setItem("experienceInformation", JSON.stringify(values));
    navigate("/education");
  };
  useEffect(() => {
    if (formValues) {
      localStorage.setItem("experienceInformation", JSON.stringify(formValues));
      setInitialValues(
        JSON.parse(localStorage.getItem("experienceInformation"))
      );
    }
  }, [formValues]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("experienceInformation"))) {
      setInitialValues(JSON.parse(localStorage.getItem("experienceInformation")));
      setFormValues(JSON.parse(localStorage.getItem("experienceInformation")))
    }
  }, [])
  return (
    <div className="form--page">
      <div className="form--container">
        <PageHeader navigate={navigate} header="გამოცდილება" pagesize="2/3"/>
        <ExperienceForm initialValues={initialValues} setFormValues={setFormValues} getValues={getValues} navigate={navigate}/>
      </div>
      <ResumeSideBar experienceInfo={formValues}/>
    </div>
  );
}

export default ExperiencesPage;
