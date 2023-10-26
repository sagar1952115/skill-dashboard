import React from "react";
import Html from "../../asset/html.png";
import "./SkillComponent.css";

const SkillComponent = ({ openModal }) => {
  return (
    <div>
      <div className="skill-container">
        <img src={Html} alt="skill" />
        <div className="skill-content">
          <h4>Hyper Text Markup Language</h4>
          <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
        <button onClick={openModal}>Update</button>
      </div>
    </div>
  );
};

export default SkillComponent;
