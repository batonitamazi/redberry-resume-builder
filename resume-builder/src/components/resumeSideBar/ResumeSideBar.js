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
  }, [generalInfo, experienceInfo, educationalInfo]);
  return (
    <div className="sidebar--container">
      <div className="resume--container">
        <div className="generalInfo--card">
          <div className="generalInfo--text--card">
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
              <div className="aboutMe--container">
                ჩემს შესახებ
                <p className="aboutMe--parapgraph">
                  {generalInfo?.aboutMe.length >= 0
                    ? generalInfo?.aboutMe
                    : generalInformation?.aboutMe}
                </p>
              </div>
            ) : null}
          </div>
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
        </div>
        {generalInfo?.name || generalInformation?.name ? (
          <div className="grey--line"></div>
        ) : null}
        {experienceInformation && (
          <div className="generalInfo--card">
            <div className="experienceInfo--text--card">
              გამოცდილება
              {experienceInformation?.experiences?.map((experience, index) => {
                return (
                  <div key={index} className="experiences__text">
                    <h2 className="position--heading">
                      {experience.position}, {experience.employer}
                    </h2>
                    <p className="working--date--range">
                      {experience.start_date}
                      {" - "}
                      {experience.due_date}
                    </p>
                    <p className="aboutMe--parapgraph">
                      {experience.description}
                    </p>
                  </div>
                );
              })}
              <div className="grey--line"></div>
            </div>
          </div>
        )}
        {educationInformation && (
          <div className="generalInfo--card">
            <div className="experienceInfo--text--card">
              განათლება
              {educationInformation?.educations?.map((education, index) => {
                return (
                  <div key={index} className="experiences__text">
                    <h2 className="position--heading">
                      {education.institute}, {education.degree_id}
                    </h2>
                    <p className="working--date--range">{education.due_date}</p>
                    <p className="aboutMe--parapgraph">
                      {education.description}
                    </p>
                  </div>
                );
              })}
              <div className="grey--line"></div>
            </div>
          </div>
        )}
      </div>
      <img
        src="./assets/redberry_ring.svg"
        className="redberry__ring"
        alt="redberry ring"
      />
    </div>
  );
}

export default ResumeSideBar;
