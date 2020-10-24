import React, { createContext, useState } from 'react';
import './App.css';
import WinnerBoard from './components/WinnerBoard/WinnerBoard';
import GameBoard from './components/GameBoard/GameBoard';

export const appContext = createContext([]);

function App() {
  const [finished, setFinished] = useState(false);
  const [steps, setSteps] = useState(0);

  const handleStepCounter = () => {
    setSteps((prev) => prev + 1);
  };

  const handlePlayAgain = () => {
    setSteps(0);
    setFinished(false);
  };
  const handleSetFinished = () => setFinished(true);

  return (
    <div className="App">
      {finished ? (
        <WinnerBoard onClick={handlePlayAgain} steps={steps} />
      ) : (
        <appContext.Provider value={[handleStepCounter, handleSetFinished]}>
          <GameBoard steps={steps} />
        </appContext.Provider>
      )}
    </div>
  );
}

export default App;
