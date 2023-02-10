import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/pageheader/PageHeader";
import ResumeSideBar from "../components/resumeSideBar/ResumeSideBar";
import ExperienceForm from "../components/experienceform/ExperienceForm";

const initialState = {
  experiences: [
    {
      position: "",
      employer: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]
};
function ExperiencesPage() {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(initialState);
  const [formValues, setFormValues] = useState(initialState);
  const getValues = (values) => {
    localStorage.setItem("experienceInformation", JSON.stringify(values));
    navigate("/education");
  };
  useEffect(() => {
    if (formValues !== initialState) {
      localStorage.setItem("experienceInformation", JSON.stringify(formValues));
      setInitialValues(
        JSON.parse(localStorage.getItem("experienceInformation"))
      );
    }
  }, [formValues]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("experienceInformation"))) {
      setInitialValues(
        JSON.parse(localStorage.getItem("experienceInformation"))
      );
      setFormValues(JSON.parse(localStorage.getItem("experienceInformation")));
    }
  }, []);

  return (
    <div className="form--page">
      <div className="form--container">
        <PageHeader navigate={navigate} header="გამოცდილება" pagesize="2/3" />
        <ExperienceForm
          initialValues={initialValues}
          getValues={getValues}
          navigate={navigate}
          setFormValues={setFormValues}
          formValues={formValues}
        />
      </div>
      <ResumeSideBar experienceInfo={formValues} />
    </div>
  );
}

export default ExperiencesPage;
