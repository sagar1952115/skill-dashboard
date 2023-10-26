import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import SkillComponent from "../skill/SkillComponent";
// import Piechart from "../piechart/Piechart";
import StatsComponent from "../stats/StatsComponent";
import ComparisonGraph from "../graph/ComparisonGraph";
import SyllabusAnalysis from "../syllabus/SyllabusAnalysis";
import QuestionAnalysis from "../question-analysis/QuestionAnalysis";
import UpdateModal from "../update-modal/UpdateModal";

const Dashboard = () => {
  const data = localStorage.getItem("data");
  const ddata = JSON.parse(data);
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  const [rank, setRank] = useState(ddata.rank);
  const [percentile, setPercentile] = useState(ddata.percentile);
  const [correct, setCorrect] = useState(ddata.correct);

  const updateData = (rank, percentile, correct) => {
    setRank(rank);
    setPercentile(percentile);
    setCorrect(correct);
  };

  useEffect(() => {
    if (!data) {
      localStorage.setItem(
        "data",
        JSON.stringify({ rank: 12890, percentile: 37, correct: 7 })
      );
    }
  }, []);

  return (
    <div>
      <div className="dashboard-container">
        {modal === true && (
          <UpdateModal
            rank={rank}
            percentile={percentile}
            correct={correct}
            closeModal={closeModal}
            updateData={updateData}
          />
        )}
        <div className="dashboard-sub-container">
          <SkillComponent openModal={openModal} />
          <StatsComponent
            rank={rank}
            percentile={percentile}
            correct={correct}
          />
          <ComparisonGraph correct={correct} percentile={percentile} />
        </div>
        <div className="dashboard-sub-container">
          <SyllabusAnalysis />
          <QuestionAnalysis correct={correct} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
