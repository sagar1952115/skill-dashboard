import React from "react";
import "./SyllabusAnalysis.css";

const SyllabusAnalysis = () => {
  return (
    <div>
      <div className="syllabus-container">
        <h3>Syllabus wise Analysis</h3>
        <div className="topic">
          <p>HTML Tools, Forms, History</p>
          <div className="progress">
            <div className="progress-container">
              <div className="skill-box">
                <div className="skill-bar">
                  <span
                    className="skill-per one"
                    style={{ backgroundColor: "#438af6" }}
                  ></span>
                </div>
              </div>
            </div>
            <p style={{ color: "#438af6" }}>80%</p>
          </div>
        </div>
        <div className="topic">
          <p>Tags & References in HTML</p>
          <div className="progress">
            <div className="progress-container">
              <div className="skill-box">
                <div className="skill-bar">
                  <span
                    className="skill-per two"
                    style={{ backgroundColor: "#ff9142" }}
                  ></span>
                </div>
              </div>
            </div>
            <p style={{ color: "#ff9142" }}>60%</p>
          </div>
        </div>
        <div className="topic">
          <p>Tables & CSS Basics</p>
          <div className="progress">
            <div className="progress-container">
              <div className="skill-box">
                <div className="skill-bar">
                  <span
                    className="skill-per three"
                    style={{ backgroundColor: "#fb5e5e" }}
                  ></span>
                </div>
              </div>
            </div>
            <p style={{ color: "#fb5e5e" }}>24%</p>
          </div>
        </div>
        <div className="topic">
          <p>Tables & CSS Basics</p>
          <div className="progress">
            <div className="progress-container">
              <div className="skill-box">
                <div className="skill-bar">
                  <span
                    className="skill-per four"
                    style={{ backgroundColor: "#2ec971" }}
                  ></span>
                </div>
              </div>
            </div>
            <p style={{ color: "#2ec971" }}>96%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusAnalysis;
