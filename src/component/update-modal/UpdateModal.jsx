import React from "react";
import { useState } from "react";
import "./UpdateModal.css";
import Html from "../../asset/html.png";
const UpdateModal = ({ rank, percentile, correct, closeModal, updateData }) => {
  // const data = localStorage.getItem("data");
  // const ddata = JSON.parse(data);

  const [urank, setRank] = useState(rank);
  const [upercentile, setPercentile] = useState(percentile);
  const [ucorrect, setCorrect] = useState(correct);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "data",
      JSON.stringify({
        rank: urank,
        percentile: upercentile,
        correct: ucorrect,
      })
    );
    updateData(urank, upercentile, ucorrect);
    closeModal();
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Update Scores</h2>
          <img src={Html} alt="skill" />
        </div>
        <form>
          <div className="modal-body">
            <div className="modal-section">
              <label>
                <span className="modal-count">1</span>
                Update your <b>rank</b>
              </label>
              <input
                value={urank}
                type="number"
                onChange={(e) => setRank(e.target.value)}
                required
              />
            </div>
            <div className="modal-section">
              <label>
                <span className="modal-count">2</span>
                Update your <b>percentile</b>
              </label>
              <input
                max={100}
                value={upercentile}
                type="number"
                onChange={(e) => setPercentile(e.target.value)}
                required
              />
            </div>
            <div className="modal-section">
              <label>
                <span className="modal-count">3</span>
                Update your <b>current score (out of 15)</b>
              </label>
              <input
                max={15}
                value={ucorrect}
                type="number"
                onChange={(e) => setCorrect(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button className="modal-close" onClick={closeModal}>
              Cancel
            </button>
            <button className="modal-button" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
