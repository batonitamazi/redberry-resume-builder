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
          src={
            generalInfo?.image.length >= 0
              ? generalInfo?.image
              : generalInformation?.image
          }
          className="user__avatar"
          alt="user profile"
        />
      ) : null}

      <div className="generalInfo--card">
        <h1 className="person--name">
          {generalInfo?.name?.length >= 0
            ? generalInfo?.name
            : generalInformation?.name}{" "}
          {generalInfo?.surname?.length >= 0
            ? generalInfo?.surname
            : generalInformation?.surname}
        </h1>
        <div>
          {generalInfo?.email || generalInformation?.email ? (
            <div className="person--email">
              <img
                src="./assets/email.svg"
                alt="email logo"
                className="email__logo"
              />
              {generalInfo?.email.length >= 0
                ? generalInfo?.email
                : generalInformation?.email}
            </div>
          ) : null}
          {generalInfo?.phone || generalInformation?.phone ? (
            <div className="person--email">
              <img
                src="./assets/cellphone.svg"
                alt="cellphone logo"
                className="email__logo"
              />
              {generalInfo?.phone.length >= 0
                ? generalInfo?.phone
                : generalInformation?.phone}
            </div>
          ) : null}
        </div>
        {generalInfo?.aboutMe || generalInformation?.aboutMe ? (
          <>
            <div className="aboutMe--container">
              ჩემს შესახებ
              <p className="aboutMe--parapgraph">
                {generalInfo?.aboutMe.length >= 0
                  ? generalInfo?.aboutMe
                  : generalInformation?.aboutMe}
              </p>
            </div>
            <div className="grey--line"></div>
          </>
        ) : null}
      </div>
      {experienceInfo || experienceInformation ? (
        <div className="generalInfo--card">
          <div className="aboutMe--container">
            გამოცდილება
            <h2 className="position--heading">
              {experienceInfo?.position?.length >= 0
                ? experienceInfo?.position
                : experienceInformation?.position}
              {",  "}
              {experienceInfo?.employer?.length >= 0
                ? experienceInfo?.employer
                : experienceInformation?.employer}
            </h2>
            <p className="working--date--range">
              {experienceInfo?.startDate?.length >= 0
                ? experienceInfo?.startDate
                : experienceInformation?.startDate}
              -{" "}
              {experienceInfo?.endDate?.length >= 0
                ? experienceInfo?.endDate
                : experienceInformation?.endDate}
            </p>
            <p className="aboutMe--parapgraph">
              {experienceInfo?.description?.length >= 0
                ? experienceInfo?.description
                : experienceInformation?.description}
            </p>
          </div>
          <div className="grey--line"></div>
        </div>
      ) : null}
      {educationalInfo || educationInformation ? (
        <div className="generalInfo--card">
          <div className="aboutMe--container">
            განათლება
            <h2 className="position--heading">
              {educationalInfo?.school?.length >= 0
                ? educationalInfo?.school
                : educationInformation?.school}
              {",  "}
              {educationalInfo?.degree?.length >= 0
                ? educationalInfo?.degree
                : educationInformation?.degree}
            </h2>
            <p className="working--date--range">
              {educationalInfo?.endDate?.length >= 0
                ? educationalInfo?.endDate
                : educationInformation?.endDate}
            </p>
            <p className="aboutMe--parapgraph">
              {educationalInfo?.description?.length >= 0
                ? educationalInfo?.description
                : educationInformation?.description}
            </p>
          </div>
          <div className="grey--line"></div>
        </div>
      ) : null}
    </div>
  );
}

export default ResumeSideBar;
