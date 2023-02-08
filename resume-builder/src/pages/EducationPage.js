import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResumeSideBar from "../components/resumeSideBar/ResumeSideBar";
import PageHeader from "../components/pageheader/PageHeader";
import EducationForm from "../components/educationform/EducationForm";

const initialState = {
  school: "",
  degree: "",
  endDate: "",
  description: "",
}


function EducationPage() {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(initialState);
  const [formValues, setFormValues] = useState(initialState);
  const getValues = (values) => {
    localStorage.setItem("educationInformation", JSON.stringify(values));
    navigate("/resume");
  };
  useEffect(() => {
    if (formValues !== initialState) {
      localStorage.setItem("educationInformation", JSON.stringify(formValues));
      setInitialValues(
        JSON.parse(localStorage.getItem("educationInformation"))
      );
    }
  }, [formValues]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("educationInformation"))) {
      setInitialValues(JSON.parse(localStorage.getItem("educationInformation")));
      setFormValues(JSON.parse(localStorage.getItem("educationInformation")));
    }
  }, []);
  return (
    <div className="form--page">
      <div className="form--container">
        <PageHeader navigate={navigate} header="განათლება" pagesize="3/3" />
        <EducationForm
          initialValues={initialValues}
          setFormValues={setFormValues}
          getValues={getValues}
          navigate={navigate}
        />
      </div>
      <ResumeSideBar educationalInfo={formValues} />
    </div>
  );
}

export default EducationPage;
