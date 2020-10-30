import React from 'react';
import { useSelector } from 'react-redux';
import WinnerBoard from './components/WinnerBoard/WinnerBoard';
import GameBoard from './components/GameBoard/GameBoard';

import './App.css';

function App() {
  const { finishStatus } = useSelector((state) => state);

  return (
    <div className="App">{finishStatus ? <WinnerBoard /> : <GameBoard />}</div>
  );
}

export default App;
