import React from "react";
import "./StatsComponent.css";

const StatsComponent = ({ rank, percentile, correct }) => {
  // const data = localStorage.getItem("data");
  // const ddata = JSON.parse(data);
  // const rank = ddata.rank;
  // const percentile = ddata.percentile;
  // const answers = ddata.correct;
  return (
    <div>
      {" "}
      <div className="stats-container">
        <h3>Quick Statistics</h3>
        <div className="stats-items">
          <div className="stats-item">
            <div className="stats-emoji">&#127942;</div>
            <div className="stats-info">
              <h2>{rank}</h2>
              <p>Your rank</p>
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-emoji">&#128466;&#65039;</div>
            <div className="stats-info">
              <h2>{percentile}%</h2>
              <p>Percentile</p>
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-emoji">&#9989;</div>
            <div className="stats-info">
              <h2>{correct} / 15</h2>
              <p>Correct Answers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
