import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../../store/features/step.reducer';
import { setFinishStatus } from '../../store/features/finish.reducer';
import './Winnerboard.css';

function WinnerBoard() {
  const { steps } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handlePlayAgain = () => {
    dispatch(reset());
    dispatch(setFinishStatus());
  };
  return (
    <div className="winner__board">
      <h1 className="you-won">You Won ! </h1>
      <p className="winner__steps">total steps: {steps}</p>
      <button className="winner__play" onClick={handlePlayAgain}>
        Play Again
      </button>
    </div>
  );
}
export default WinnerBoard;
