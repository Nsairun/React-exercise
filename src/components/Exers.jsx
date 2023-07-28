import { useState } from 'react';
import Button from './Button';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Exers(onplay) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    onplay(nextSquares);
  }

  return (
    <div className="intro">
      <div className="xbox">
        <Button
          type="button"
          style={{
            background: 'grey',
            padding: '15px',
            borderRadius: '10px',
            color: 'white',
          }}
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Button
          type="button"
          style={{
            background: 'grey',
            padding: '15px',
            borderRadius: '10px',
            color: 'white',
          }}
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Button
          type="button"
          style={{
            background: 'grey',
            padding: '15px',
            borderRadius: '10px',
            color: 'white',
          }}
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
        <Button
          type="button"
          style={{
            background: 'grey',
            padding: '15px',
            borderRadius: '10px',
            color: 'white',
          }}
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Button
          type="button"
          style={{
            background: 'grey',
            padding: '15px',
            borderRadius: '10px',
            color: 'white',
          }}
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Button
          type="button"
          style={{
            background: 'grey',
            padding: '15px',
            borderRadius: '10px',
            color: 'white',
          }}
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
        <Button
          type="button"
          style={{
            background: 'grey',
            padding: '15px',
            borderRadius: '10px',
            color: 'white',
          }}
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Button
          type="button"
          style={{
            background: 'grey',
            padding: '15px',
            borderRadius: '10px',
            color: 'white',
          }}
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Button
          type="button"
          style={{
            background: 'grey',
            padding: '15px',
            borderRadius: '10px',
            color: 'white',
          }}
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
      <h1>{status}</h1>
    </div>
  );
}

export default Exers;
