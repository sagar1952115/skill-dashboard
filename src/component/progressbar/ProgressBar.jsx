import React from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <div>
      <div className="progress-container">
        <div className="skill-box">
          <span className="title">HTML</span>
          <div className="skill-bar">
            <span
              className="skill-per"
              style={{ backgroundColor: "red" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
