import React, { useRef, useEffect } from "react";
import Target from "../../asset/target.png";
import "./Piechart.css";

const Piechart = ({ answers }) => {
  const progressBarRef = useRef(null);
  let progressValue = 0;
  const total = 15;
  const scored = answers;
  let progressEndValue = Math.floor((scored / total) * 100);

  let speed = 20;

  useEffect(() => {
    const progressBar = progressBarRef.current;
    if (progressBar) {
      let progress = setInterval(() => {
        progressValue++;
        progressBar.style.background = `conic-gradient(
          #438AF6 ${progressValue * 3.6}deg,
          rgba(67, 138, 246, 0.1) ${progressValue * 3.6}deg
        )`;
        if (progressValue === progressEndValue) {
          clearInterval(progress);
        }
      }, speed);
      return () => {
        clearInterval(progress);
      };
    }
  }, [progressBarRef, progressEndValue, progressValue, speed]);

  return (
    <div>
      <div className="piechart-container">
        <div ref={progressBarRef} className="circular-progress">
          <div className="value-container">
            <img src={Target} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piechart;
