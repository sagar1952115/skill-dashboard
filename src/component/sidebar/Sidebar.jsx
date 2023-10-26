import React from "react";
import Dashboard from "../../asset/dashboard.svg";
import Skill from "../../asset/skill.svg";
import Internships from "../../asset/internships.svg";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-item">
        <div>
          {" "}
          <img src={Dashboard} alt="icon" />
          <p>Dashboard</p>
        </div>
      </div>
      <div className="sidebar-item active">
        <div>
          <img src={Skill} alt="icon" />
          <p>Skill Test</p>
        </div>
      </div>
      <div className="sidebar-item">
        <div>
          {" "}
          <img src={Internships} alt="icon" />
          <p>Internships</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
