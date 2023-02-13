import React, { useState } from "react";
import "./resumepage.css";
import ResumeSideBar from "../../components/resumeSideBar/ResumeSideBar";
import { useNavigate } from "react-router-dom";

function ResumePage() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true)
  return (
    <div className="resume--page">
      <button
        className="rounded--btn"
        onClick={() => navigate("/")}
        type="button"
      >
        <img
          src="./assets/arrow.svg"
          alt="arrow button"
          className="arrow--btn"
        />
      </button>
      <div className="resume--popup--container">
        <ResumeSideBar />
        <div className={show ? "pop-up" : "pop-up-hidden"}>
          <img src="./assets/delete.svg" className="delete__icon" alt="delete" onClick={() => setShow(false)}/>
          <div className="pop-up-text">რეზიუმე წარმატებით გაიგზავნა 🎉</div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
