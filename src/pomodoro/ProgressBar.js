import React from "react";

function ProgressBar({ currentTime, totalTime }) {
 const progress = currentTime/totalTime * 100
  
    return (
    <div className="row mb-2">
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={progress} // DONE?: Increase aria-valuenow as elapsed time increases
            style={{ width: `${progress}%`}} // DONE?: Increase width % as elapsed time increases
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
