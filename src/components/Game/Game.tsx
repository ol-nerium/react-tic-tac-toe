import { useState } from 'react';
import Board from '../Board/Board';
import Title from '../Title/Title';
import HistoryList from '../HistoryList/HistoryList';

const Game = () => {
  const [gameHistory, setGameHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(false);
  const currentSquares = gameHistory[gameHistory.length - 1];
  function handleClick(i: number) {
    if (currentSquares[i] || isWinned()) return;
    let nextValue = xIsNext ? 'x' : 'o';
    const newSquares = currentSquares.slice();
    newSquares[i] = nextValue;
    setXIsNext(s => !s);
    setGameHistory(state => [...state, newSquares]);
  }
  function handleReturn(move: number) {
    setGameHistory(state => state.slice(0, move));
  }
  function isWinned() {
    const winArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winArr.length; i += 1) {
      const [a, b, c] = winArr[i];
      if (
        currentSquares[a] &&
        currentSquares[a] === currentSquares[b] &&
        currentSquares[a] === currentSquares[c]
      )
        return `Game Over! ${!xIsNext ? 'X' : 'O'} winned!`;
    }
  }
  return (
    <>
      <Title text={isWinned() || `${xIsNext ? 'x' : 'o'} turn`} />
      <Board history={gameHistory} onClick={handleClick} />
      <HistoryList history={gameHistory} handleReturn={handleReturn} />
    </>
  );
};

export default Game;
