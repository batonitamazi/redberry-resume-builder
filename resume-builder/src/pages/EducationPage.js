import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResumeSideBar from "../components/resumeSideBar/ResumeSideBar";
import PageHeader from "../components/pageheader/PageHeader";
import EducationForm from "../components/educationform/EducationForm";
import { formSubmit } from "../helpers/formSubmit";
import getDegrees from "../helpers/getDegrees";


const initialState = {
  educations: [
    {
      institute: "",
      degree_id: "",
      due_date: "",
      description: "",
    },
  ],
};

function EducationPage() {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(initialState);
  const [formValues, setFormValues] = useState(initialState);
  const [degrees, setDegrees] = useState([])
  const getValues = (values) => {
    formSubmit(values, navigate, degrees)
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
      setInitialValues(
        JSON.parse(localStorage.getItem("educationInformation"))
      );
      setFormValues(JSON.parse(localStorage.getItem("educationInformation")));
    }
    getDegrees(setDegrees)
  }, []);
 
  return (
    <div className="form--page">
      <div className="form--container">
        <PageHeader header="განათლება" pagesize="3/3" />
        <EducationForm
          initialValues={initialValues}
          setFormValues={setFormValues}
          getValues={getValues}
          navigate={navigate}
          degrees={degrees}
        />
      </div>
      <ResumeSideBar educationalInfo={formValues} />
    </div>
  );
}

export default EducationPage;
