import React from "react";
import Piechart from "../piechart/Piechart";
import "./QuestionAnalysis.css";

const QuestionAnalysis = ({correct}) => {
  // const data = localStorage.getItem("data");
  // const ddata = JSON.parse(data);
  // const answers = ddata.correct;
  return (
    <div className="qanalysis-container">
      <div className="qanalysis-header">
        <h3>Question Analysis</h3>
        <p>{correct} / 15</p>
      </div>
      <div className="qanalysis-body">
        <p>
          <b>You scored {correct} questions correct out of 15.</b> However it
          still needs some improvement
        </p>
        <Piechart answers={correct} />
      </div>
    </div>
  );
};

export default QuestionAnalysis;
