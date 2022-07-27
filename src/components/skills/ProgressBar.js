import React from "react";
import './ProgressBar.css'

const ProgressBar = (props) => {
    const progress = props.progress
  return (
    <div className="progresscontainer">      
      <div className="progressbar-container">
        <div className="progressbar-complete" style={{ width: `${progress}%` }}>
          <div className="progressbar-liquid"></div>
        </div>
        <span className="progress">{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
