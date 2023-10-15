import Box from "./Box";
// import { useState } from "react";

const Board = ({ xIsNext, squares, onPlay }) => {
  // const [xisNext, setXIsNext] = useState(true);
  // const [square, setSquare] = useState(Array(9).fill(null));
  function Reset() {
    const empty = Array(9).fill(null);
    onPlay(empty);
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
    // setXIsNext(!xisNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner" + winner;
  } else {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="info">
        <div className="status">{status}</div>
        <div className="reset">
          <button onClick={Reset}>Reset</button>
        </div>
      </div>
      <div className="board">
        <Box value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Box value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Box value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board">
        <Box value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Box value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Box value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board">
        <Box value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Box value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Box value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;

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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
