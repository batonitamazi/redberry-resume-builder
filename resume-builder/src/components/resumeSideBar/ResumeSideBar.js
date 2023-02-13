import React, { useEffect, useState } from "react";
import "./resumesidebar.css";
import getDegrees from "../../helpers/getDegrees";

function ResumeSideBar({ generalInfo, experienceInfo, educationalInfo }) {
  const [generalInformation, setGeneralInformation] = useState();
  const [experienceInformation, setExperienceInformation] = useState();
  const [educationInformation, setEducationInformation] = useState();
  const [degrees, setDegrees] = useState([]);

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
    getDegrees(setDegrees);
  }, []);
  const experience = experienceInfo || experienceInformation;
  const education  = educationalInfo || educationInformation
  const general = generalInfo || generalInformation
  return (
    <div className="sidebar--container">
      <div className="resume--container">
        <div className="generalInfo--card">
          <div className="generalInfo--text--card">
            <h1 className="person--name">
              {general?.name}{" "}
              {general?.surname}
            </h1>
            <div>
              {general?.email ? (
                <div className="person--email">
                  <img
                    src="./assets/email.svg"
                    alt="email logo"
                    className="email__logo"
                  />
                  {general?.email}
                </div>
              ) : null}
              {general?.phone ? (
                <div className="person--email">
                  <img
                    src="./assets/cellphone.svg"
                    alt="cellphone logo"
                    className="email__logo"
                  />
                  {general?.phone}
                </div>
              ) : null}
            </div>
            {general?.aboutMe ? (
              <div className="aboutMe--container" style={{maxWidth: '410px'}}>
                ჩემს შესახებ
                <p className="aboutMe--parapgraph">
                  {general?.aboutMe}
                </p>
              </div>
            ) : null}
          </div>
          {general?.image ? (
            <img
              src={
                general?.image
              }
              className="user__avatar"
              alt="user profile"
            />
          ) : null}
        </div>
        {general?.name ? (
          <div className="grey--line"></div>
        ) : null}
        {experience && (
          <div className="generalInfo--card">
            <div className="experienceInfo--text--card">
              გამოცდილება
              {experience?.experiences?.map((experience, index) => {
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
        {education && (
          <div className="generalInfo--card">
            <div className="experienceInfo--text--card">
              განათლება
              {education?.educations?.map((education, index) => {
                return (
                  <div key={index} className="experiences__text">
                    <h2 className="position--heading">
                      {education.institute},
                      {
                        degrees?.find(
                          (degree) => degree.id === Number(education?.degree_id)
                        )?.title
                      }
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
