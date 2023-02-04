import React, { useEffect, useState } from "react";
import "./resumesidebar.css";

function ResumeSideBar({generalInfo, experienceInfo, educationalInfo }) {
  const [generalInformation, setGeneralInformation] = useState()
  const [experienceInformation, setExperienceInformation] = useState()
  const [educationInformation, setEducationInformation] = useState()

  useEffect(() => {
    setGeneralInformation(JSON.parse(localStorage.getItem("generalInformation")));
    setExperienceInformation(
      JSON.parse(localStorage.getItem("experienceInformation"))
    );
    setEducationInformation(
      JSON.parse(localStorage.getItem("educationInformation"))
    );
  }, []);
  return (
    <div className="sidebar--container">
      <p>{generalInfo?.name || generalInformation?.name}</p>
      <p>{ generalInfo?.surname || generalInformation?.surname}</p>
      <p>{ generalInfo?.email || generalInformation?.email}</p>
      <p>{generalInfo?.phone || generalInformation?.phone}</p>
      <p>{generalInfo?.aboutMe || generalInformation?.aboutMe}</p>
      <p>{experienceInfo?.position || experienceInformation?.position}</p>
      <p>{experienceInfo?.employer || experienceInformation?.employer}</p>
      <p>{experienceInfo?.startDate || experienceInformation?.startDate}</p>
      <p>{experienceInfo?.endDate || experienceInformation?.endDate  }</p>
      <p>{experienceInfo?.description || experienceInformation?.description}</p>
      <p>{educationalInfo?.school || educationInformation?.school}</p>
      <p>{educationalInfo?.degree || educationInformation?.degree}</p>
      <p>{educationalInfo?.endDate || educationInformation?.endDate}</p>
      <p>{educationalInfo?.description || educationInformation?.description}</p>
    </div>
  );
}

export default ResumeSideBar;
