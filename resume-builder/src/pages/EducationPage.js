import React from "react"
import { useNavigate } from "react-router-dom";

function EducationPage() {
  const navigate = useNavigate()
  return (
    <div>
      EducationPage
      <button onClick={() => navigate("/education")}>უკან</button>
      <button onClick={() => navigate("/resume")}>შემდეგი</button>
    </div>
  );
}

export default EducationPage;
