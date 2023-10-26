import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
import "./ComparisonGraph.css";
const Graph = ({ score, percentile }) => {
  const data = [
    { score: 0, percentile: 100 },
    { score: 14, percentile: 80 },
    { score: 8, percentile: 55 },
    { score: 4, percentile: 65 },
    { score: 5, percentile: 42 },
    { score: 10, percentile: 30 },
    { score: 0, percentile: 0 },
    { score: 6, percentile: 50 },
    { score: score, percentile: percentile },
  ];

  const averageReference = 72;

  const sortedData = data.sort((a, b) => a.percentile - b.percentile);
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length && label === percentile) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}% Percentile`}</p>
          <p className="desc">Your Score</p>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={400}
        height={200}
        data={sortedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeOpacity={0.3} strokeDasharray="3 3" />
        <XAxis
          dataKey={"percentile"}
          type="number"
          domain={[0, 100]}
          tickLine={false}
        />
        <YAxis dataKey={"score"} hide />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="score"
          stroke="#438AF6"
          activeDot={{ r: 8 }}
        />
        <ReferenceDot
          x={averageReference}
          y={20}
          r={8}
          fill="orange"
          stroke="none"
        />
        <ReferenceDot
          x={percentile}
          y={score}
          r={8}
          fill="#438AF6"
          stroke="none"
        />
        <ReferenceLine
          x={averageReference}
          stroke="orange"
          strokeDasharray="5 5"
        />
        <ReferenceLine x={percentile} stroke="#438AF6" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;
