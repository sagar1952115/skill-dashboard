import React from "react";
import Graph from "./Graph";

const ComparisonGraph = ({ correct, percentile }) => {
  const average = 73;
  return (
    <div>
      <div className="comparison-container">
        <h3>Comparison Graph</h3>
        {average > percentile ? (
          <p>
            <b>You scored {percentile}% percentile</b> which is lower than
            average percentile {average}% of all engineers who took this
            assessment.
          </p>
        ) : (
          <p>
            <b>You scored {percentile}% percentile</b> which is higher than
            average percentile {average}% of all engineers who took this
            assessment.
          </p>
        )}
        <Graph score={correct} percentile={percentile} />
      </div>
    </div>
  );
};

export default ComparisonGraph;
