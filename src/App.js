import React from 'react';
import './App.css';
import Btn from "./components/Btn";
import {copyArray, generateRenderData} from "./helpers";
import BtnContainer from "./components/BtnContainer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      finished: false
    }
  }

  handlePlayAgain = () => {
    this.setState({
      finished: false,
    })
  }

  handleSetFinished = () => {
    this.setState({finished: true})
  }

  render() {
    return (
      <div className="App">
        {this.state.finished ? (
          <>
            <h1 className="you-won">You Won ! </h1>
            <button onClick={this.handlePlayAgain}>Play Again</button>
          </>
        ) : (
          <BtnContainer setFinished={this.handleSetFinished}/>
        )}
      </div>
    )
  }
}

export default App;
