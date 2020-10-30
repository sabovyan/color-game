import React from 'react';
import Button from '../Button/index';
import { useSelector } from 'react-redux';

import './GameContainer.css';

function GameContainer({ onClick }) {
  const { renderColors } = useSelector((state) => state);

  const handleClick = (i) => () => {
    onClick(i);
  };

  return (
    <div className="game-container">
      {renderColors
        ? renderColors.map((colors, i) => (
            <div key={i} className="btn-container" onClick={handleClick(i)}>
              {colors.map((color, j) => (
                <Button key={j} color={color} />
              ))}
            </div>
          ))
        : null}
    </div>
  );
}

export default GameContainer;
