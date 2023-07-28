/* eslint-disable react/prop-types */
import React from 'react';

function Button({ value, onSquareClick }) {
  return (
    <div>
      <button
        className="square"
        type="button"
        style={{ minHeight: '2rem', minWidth: '2rem' }}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
