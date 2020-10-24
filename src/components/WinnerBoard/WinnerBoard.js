import React from 'react';

import './Winnerboard.css';

function WinnerBoard({ onClick, steps }) {
  return (
    <div className="winner__board">
      <h1 className="you-won">You Won ! </h1>
      <p className="winner__steps">total steps: {steps}</p>
      <button className="winner__play" onClick={onClick}>
        Play Again
      </button>
    </div>
  );
}
export default WinnerBoard;
