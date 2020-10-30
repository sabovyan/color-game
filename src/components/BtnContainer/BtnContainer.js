import React, { useContext, useEffect, useState, useRef } from 'react';
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
  const maxCount = useRef(null);

  const [selectedColor, setSelectedColor] = useState(null);
  const [indexOFLastArray, setIndexOFLastArray] = useState(null);

  const [addSteps, setFinished] = useContext(appContext);

  const handleClick = (index) => {
    const copyColors = copyArray(handleColors);
    const clickedColorsArray = copyColors[index];
    const clickedColor = clickedColorsArray[clickedColorsArray.length - 1];

    if (!selectedColor) {
      setSelectedColor(clickedColor);
      setIndexOFLastArray(index);

      clickedColorsArray.pop();
      setRenderColors(generateRenderData(copyColors, maxCount.current));
      setHandleColors(copyColors);
      addSteps();
      return;
    }

    if (
      clickedColorsArray.length < maxCount.current &&
      (!clickedColor || selectedColor === clickedColor)
    ) {
      clickedColorsArray.push(selectedColor);
      setRenderColors(generateRenderData(copyColors, maxCount.current));
      setHandleColors(copyColors);
      setSelectedColor('');
      addSteps();
    }
  };

  const handleSelectedColorClick = () => {
    if (indexOFLastArray !== null) {
      const copyColors = copyArray(handleColors);
      const lastArray = copyColors[indexOFLastArray];
      lastArray.push(selectedColor);
      setRenderColors(generateRenderData(copyColors, maxCount.current));
      setHandleColors(copyColors);
      setSelectedColor(null);
      setIndexOFLastArray(null);
      addSteps();
    }
  };

  useEffect(() => {
    const data = getData();
    data.then((data) => {
      maxCount.current = data.maxCount;
      setRenderColors(generateRenderData(data.colors, maxCount.current));
      setHandleColors(data.colors);
    });
  }, []);

  useEffect(() => {
    isGameOver(handleColors, setFinished, maxCount.current);
  }, [handleColors]);

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
