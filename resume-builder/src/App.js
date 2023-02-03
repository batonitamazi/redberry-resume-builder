import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GeneralInfoPage from "./pages/GeneralInfoPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import EducationPage from "./pages/EducationPage";
import ResumePage from "./pages/ResumePage";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/general-information" element={<GeneralInfoPage />}/>
          <Route path="/experience" element={<ExperiencesPage />} />
          <Route path="/education" element={<EducationPage />}/>
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
