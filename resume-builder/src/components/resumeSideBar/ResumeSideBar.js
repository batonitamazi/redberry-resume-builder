import React, { useEffect, useState } from "react";
import "./resumesidebar.css";

function ResumeSideBar({ generalInfo, experienceInfo, educationalInfo }) {
  const [generalInformation, setGeneralInformation] = useState();
  const [experienceInformation, setExperienceInformation] = useState();
  const [educationInformation, setEducationInformation] = useState();

  useEffect(() => {
    setGeneralInformation(
      JSON.parse(localStorage.getItem("generalInformation"))
    );
    
    setExperienceInformation(
      JSON.parse(localStorage.getItem("experienceInformation"))
    );
    setEducationInformation(
      JSON.parse(localStorage.getItem("educationInformation"))
    );
  }, []);
  return (
    <div className="sidebar--container">
      {generalInfo?.image || generalInformation?.image ? (
        <img
        src={generalInfo?.image || generalInformation?.image}
        className="user__avatar"
        alt="user profile"
      />
      ): null}
      
      <div className="generalInfo--card">
        <h1 className="person--name">
          {generalInfo?.name || generalInformation?.name}{" "}
          {generalInfo?.surname || generalInformation?.surname}
        </h1>
        <div>
          {generalInfo?.email || generalInformation?.email ? (
            <div className="person--email">
              <img
                src="./assets/email.svg"
                alt="email logo"
                className="email__logo"
              />
              {generalInfo?.email || generalInformation?.email}
            </div>
          ) : null}
          {generalInfo?.phone || generalInformation?.phone ? (
            <div className="person--email">
              <img
                src="./assets/cellphone.svg"
                alt="cellphone logo"
                className="email__logo"
              />
              {generalInfo?.phone || generalInformation?.phone}
            </div>
          ) : null}
        </div>
        {generalInfo?.aboutMe || generalInformation?.aboutMe ? (
          <>
            <div className="aboutMe--container">
              ჩემს შესახებ
              <p className="aboutMe--parapgraph">
                {generalInfo?.aboutMe || generalInformation?.aboutMe}
              </p>
            </div>
            <div className="grey--line"></div>
          </>
        ) : null}
      </div>
      {/* <div className="generalInfo--card">
        <div className="aboutMe--container">
          გამოცდილება
          <h2 className="position--heading">
            {experienceInfo?.position || experienceInformation?.position}
            {",  "}
            {experienceInfo?.employer || experienceInformation?.employer}
          </h2>
          <p className="working--date--range">
            {experienceInfo?.startDate || experienceInformation?.startDate} -{" "}
            {experienceInfo?.endDate || experienceInformation?.endDate}
          </p>
          <p className="aboutMe--parapgraph">
            {experienceInfo?.description || experienceInformation?.description}
          </p>
        </div>
        <div className="grey--line"></div>
      </div> */}
      {/* <div className="generalInfo--card">
        <div className="aboutMe--container">
          განათლება
          <h2 className="position--heading">
            {educationalInfo?.school || educationInformation?.school}
            {",  "}
            {educationalInfo?.degree || educationInformation?.degree}
          </h2>
          <p className="working--date--range">
            {educationalInfo?.endDate || educationInformation?.endDate}
          </p>
          <p className="aboutMe--parapgraph">
            {educationalInfo?.description || educationInformation?.description}
          </p>
        </div>
        <div className="grey--line"></div>
      </div> */}
    </div> 
  );
}

export default ResumeSideBar;
