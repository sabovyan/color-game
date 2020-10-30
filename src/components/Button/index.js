import React from 'react';

import './Button.css';

function Button({ className, style, color, onClick }) {
  return (
    <div
      className={`btn ${className}`}
      style={{ ...style, backgroundColor: color }}
      onClick={onClick}
    />
  );
}

export default Button;
