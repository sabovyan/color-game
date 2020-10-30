import React from 'react';
import { useSelector } from 'react-redux';
import ButtonContainer from '../BtnContainer/BtnContainer';

import './GameBoard.css';

function GameBoard() {
  const { steps } = useSelector((state) => state);
  return (
    <>
      <div className="game__score">
        <span>step {steps}</span>
      </div>
      <ButtonContainer />
    </>
  );
}

export default GameBoard;
