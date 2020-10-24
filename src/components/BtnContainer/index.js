import React, { useContext, useEffect, useState } from 'react';
/* helpers */
import { copyArray, generateRenderData, isGameOver } from '../../helpers';
/* service */
import { getData } from '../../Services/getData';
/* Components */
import Button from '../Button';
import GameContainer from '../GameContainer/GameContainer';
import { appContext } from '../../App';

/* CSS */
import './BtnContainer.css';

function ButtonContainer() {
  const [renderColors, setRenderColors] = useState(null);
  const [handleColors, setHandleColors] = useState([]);

  const [maxCount, setMaxCount] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [indexOFLastArray, setIndexOFLastArray] = useState(null);

  const [addSteps, setFinished] = useContext(appContext);

  useEffect(() => {
    const data = getData();
    data.then((data) => {
      setMaxCount(data.maxCount);
      setRenderColors(generateRenderData(data.colors, maxCount));
      setHandleColors(data.colors);
    });
  }, [maxCount]);

  const handleClick = (index) => {
    const copyColors = copyArray(handleColors);
    const clickedColorsArray = copyColors[index];
    const clickedColor = clickedColorsArray[clickedColorsArray.length - 1];

    if (!selectedColor) {
      setSelectedColor(clickedColor);
      setIndexOFLastArray(index);

      clickedColorsArray.pop();
      setRenderColors(generateRenderData(copyColors, maxCount));
      setHandleColors(copyColors);
      addSteps();
      return;
    }

    if (
      clickedColorsArray.length < maxCount &&
      (!clickedColor || selectedColor === clickedColor)
    ) {
      clickedColorsArray.push(selectedColor);
      setRenderColors(generateRenderData(copyColors, maxCount));
      setHandleColors(copyColors);
      setSelectedColor('');
      addSteps();
    }
    isGameOver(handleColors, setFinished, maxCount);
  };

  const handleSelectedColorClick = () => {
    if (indexOFLastArray !== null) {
      const copyColors = copyArray(handleColors);
      const lastArray = copyColors[indexOFLastArray];
      lastArray.push(selectedColor);
      setRenderColors(generateRenderData(copyColors, maxCount));
      setHandleColors(copyColors);
      setSelectedColor(null);
      setIndexOFLastArray(null);
      addSteps();
    }
  };

  return (
    <>
      <Button
        color={selectedColor}
        className="btn-selected"
        onClick={handleSelectedColorClick}
      />
      <GameContainer renderColors={renderColors} onClick={handleClick} />
    </>
  );
}

export default ButtonContainer;
