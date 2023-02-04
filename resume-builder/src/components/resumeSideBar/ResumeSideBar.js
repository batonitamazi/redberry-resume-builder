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
  console.log(generalInfo)
  return (
    <div className="sidebar--container">
      <p>{generalInformation?.name || generalInfo?.name}</p>
      <p>{generalInformation?.surname || generalInfo?.surname}</p>
      <p>{generalInformation?.email || generalInfo?.email}</p>
      <p>{generalInformation?.phone || generalInfo?.phone}</p>
      <p>{generalInformation?.aboutMe || generalInfo?.aboutMe}</p>
      <p>{experienceInformation?.position || experienceInfo?.position}</p>
      <p>{experienceInformation?.employer || experienceInfo?.employer}</p>
      <p>{experienceInformation?.startDate || experienceInfo?.startDate}</p>
      <p>{experienceInformation?.endDate || experienceInfo?.endDate}</p>
      <p>{experienceInformation?.description || experienceInfo?.description}</p>
      <p>{educationInformation?.school || educationalInfo?.school}</p>
      <p>{educationInformation?.degree || educationalInfo?.degree}</p>
      <p>{educationInformation?.endDate || educationalInfo?.endDate}</p>
      <p>{educationInformation?.description || educationalInfo?.description}</p>
    </div>
  );
}

export default ResumeSideBar;
