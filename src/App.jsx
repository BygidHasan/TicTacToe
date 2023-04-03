import React, { useState } from "react";
import Square from "./Square";

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const winner = checkWinner(board);

  function checkWinner(board) {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c])
        return board[a];
    }
    return null;
  }

  function handleClick(index) {
    if (board[index] || winner) return;

    const copy = [...board];
    copy[index] = xTurn ? "X" : "O";
    setBoard(copy);
    setXTurn(!xTurn);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  }

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (board.every((square) => square !== null)) {
    status = "It's a draw!";
  } else {
    status = "Turn for: " + (xTurn ? "X" : "O");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center text-4xl text-red-900 font-bold mb-5">
          {status}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {board.map((value, index) => (
            <Square
              key={index}
              value={value}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        {winner || board.every((square) => square !== null) ? (
          <button
            onClick={resetGame}
            className="px-4 py-3 text-teal-500 font-bold bg-transparent border rounded-lg mt-5 border-teal-500 hover:border-transparent hover:bg-teal-500 hover:text-white hover:transition hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-200"
          >
            Play Again
          </button>
        ) : null}
      </div>
    </>
  );
}

export default App;
