import React, { useRef, useEffect } from "react";
import "./Piechart.css";

const Piechart = () => {
  const progressBarRef = useRef(null);
  let progressValue = 0;
  const total = 15;
  const scored = 7;
  let progressEndValue = Math.floor((scored / total) * 100);

  let speed = 50;

  useEffect(() => {
    const progressBar = progressBarRef.current;
    if (progressBar) {
      let progress = setInterval(() => {
        progressValue++;
        progressBar.style.background = `conic-gradient(
          #4d5bf9 ${progressValue * 3.6}deg,
          #cadcff ${progressValue * 3.6}deg
        )`;
        if (progressValue == progressEndValue) {
          clearInterval(progress);
        }
      }, speed);
      return () => {
        clearInterval(progress);
      };
    }
  }, [progressBarRef, progressEndValue, speed]);

  return (
    <div>
      <div className="piechart-container">
        <div ref={progressBarRef} className="circular-progress">
          <div className="value-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Piechart;
