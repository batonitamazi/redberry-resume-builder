import React from "react";
import "./landingpage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing--container">
      <div className="heading--container">
        <img src="./assets/redberry_logo.svg" alt="redberry logo" className="redberry--logo"/>
        <div className="red--line"></div>
      </div>
      <div className="landingPage--actions">
        <button
          onClick={() => navigate("/general-information")}
          className="startForm--btn"
        >
          რეზიუმეს დამატება
        </button>
      </div>
      <img src="./assets/agency__logo.svg" alt="hologram logo" className="hologram__logo"/>
    </div>
  );
}

export default LandingPage;
