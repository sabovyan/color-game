import React from 'react';
import ButtonContainer from '../BtnContainer/index';

import './GameBoard.css';

function GameBoard({ steps }) {
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
