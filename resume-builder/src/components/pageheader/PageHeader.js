import React from "react";
import { useNavigate } from "react-router-dom";
import "./pageheader.css";

function PageHeader({header, pagesize}) {
  const navigate = useNavigate()
  const handleClick = () => { 
    localStorage.removeItem("generalInformation")
    localStorage.removeItem("experienceInformation")
    localStorage.removeItem("educationInformation")
    navigate("/")
  }
  return (
    <div className="page--header--container">
      <button className="rounded--btn" onClick={handleClick} type="button">
        <img
          src="./assets/arrow.svg"
          alt="arrow button"
          className="arrow--btn"
        />
      </button>
      <div className="page--header">
        <div className="header--card">
          <h2 className="page--heading">{header}</h2>
          <p className="contents--paragraph">{pagesize}</p>
        </div>
        <div
          className="red--line"
          style={{ border: "1px solid #1A1A1A" }}
        ></div>
      </div>
    </div>
  );
}

export default PageHeader;
