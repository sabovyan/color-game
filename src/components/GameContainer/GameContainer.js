import React from 'react';
import Button from '../Button/index';

import './GameContainer.css';

function GameContainer({ renderColors, onClick }) {
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
