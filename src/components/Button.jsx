/* eslint-disable react/prop-types */
import React from 'react';

function Button({ value, onSquareClick }) {
  return (
    <div>
      <button className="square" type="button" onClick={onSquareClick}>
        {value}
      </button>
    </div>
  );
}

export default Button;
