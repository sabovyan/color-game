import React from 'react';
import Btn from "../Btn";
import {copyArray, generateRenderData} from "../../helpers";

class BtnContainer extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      colors: [],
      selectedColor: '',
    }
  }

  async componentDidMount() {
    const response = await fetch('data.json');
    const data = await response.json();

    this.MAX_COUNT = data.maxCount;
    this.setState({colors: data.colors});
  }

  handleClick = (index) => {
    const colors = copyArray(this.state.colors);
    const clickedColorsArray = colors[index];
    const clickedColor = clickedColorsArray[clickedColorsArray.length - 1];

    if (!this.state.selectedColor) {
      clickedColorsArray.pop();
      this.setState({
        selectedColor: clickedColor,
        colors,
      });

      return;
    }

    if (clickedColorsArray.length < this.MAX_COUNT && (!clickedColor || this.state.selectedColor === clickedColor)) {
      clickedColorsArray.push(this.state.selectedColor);
      this.setState({
        selectedColor: '',
        colors
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedColor !== this.state.selectedColor) {
      let status = true;

      this.state.colors.forEach((colors) => {
        if (colors.length) {
          if (colors.length === this.MAX_COUNT) {
            const uniqueObj = new Set();
            colors.forEach((color) => uniqueObj.add(color));
            if (uniqueObj.size !== 1) status = false;
            return;
          }

          status = false;
        }
      })

      if (status) {
        this.props.setFinished();
      }
    }
  }

  render() {
    const colors = generateRenderData(this.state.colors, this.MAX_COUNT);

    return (
      <>
        <Btn color={this.state.selectedColor} className="btn-selected"/>

        <div className="game-container">
          {colors.map((colors, i) => (
            <div key={i} className="btn-container" onClick={() => this.handleClick(i)}>
              {colors.map((color, j) => (
                <Btn key={j} color={color}/>
              ))}
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default BtnContainer;