import React, { useEffect, useState, useRef } from 'react';
/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { setFinishStatus } from '../../store/features/finish.reducer';
import { increment } from '../../store/features/step.reducer';
import { setSelectedColor } from '../../store/features/selectedColor.reducer';
import { setRenderColors } from '../../store/features/renderColors.reducer';
import { getAllColors } from '../../store/features/colors.reducer';
/* Components */
import Button from '../Button';
import GameContainer from '../GameContainer/GameContainer';
/* helpers */
import { copyArray, generateRenderData, isGameOver } from '../../helpers';
/* CSS */
import './BtnContainer.css';

function ButtonContainer() {
  const maxCount = useRef(null);
  const dispatch = useDispatch();
  const [handleColors, setHandleColors] = useState([]);
  const [indexOFLastArray, setIndexOFLastArray] = useState(null);

  const { colorsJson, selectedColor } = useSelector((state) => state);

  const handleClick = (index) => {
    const copyColors = copyArray(handleColors);
    const clickedColorsArray = copyColors[index];
    const clickedColor = clickedColorsArray[clickedColorsArray.length - 1];

    if (!selectedColor) {
      dispatch(setSelectedColor(clickedColor));

      setIndexOFLastArray(index);

      clickedColorsArray.pop();
      dispatch(
        setRenderColors(generateRenderData(copyColors, maxCount.current))
      );
      setHandleColors(copyColors);
      dispatch(increment());
      return;
    }

    if (
      clickedColorsArray.length < maxCount.current &&
      (!clickedColor || selectedColor === clickedColor)
    ) {
      clickedColorsArray.push(selectedColor);
      dispatch(
        setRenderColors(generateRenderData(copyColors, maxCount.current))
      );
      setHandleColors(copyColors);
      dispatch(setSelectedColor(''));
      dispatch(increment());
    }
  };

  const handleSelectedColorClick = () => {
    if (indexOFLastArray !== null) {
      const copyColors = copyArray(handleColors);
      const lastArray = copyColors[indexOFLastArray];
      lastArray.push(selectedColor);
      dispatch(
        setRenderColors(generateRenderData(copyColors, maxCount.current))
      );
      setHandleColors(copyColors);
      dispatch(setSelectedColor(null));
      setIndexOFLastArray(null);
      dispatch(increment());
    }
  };

  useEffect(() => {
    dispatch(getAllColors());
    if (colorsJson.status) {
      maxCount.current = colorsJson.data.maxCount;
      setHandleColors(colorsJson.data.colors);
      dispatch(
        setRenderColors(
          generateRenderData(colorsJson.data.colors, maxCount.current)
        )
      );
    }
    /* ANCHOR weak point the dependency array needs one more item */
    // after  it renders data every time(colorsJson.data.colors)
  }, [colorsJson.data.maxCount, colorsJson.status, dispatch, maxCount]);

  useEffect(() => {
    const isWinner = isGameOver(handleColors, maxCount.current);
    if (isWinner) {
      dispatch(setFinishStatus());
    }
  }, [dispatch, handleColors]);

  return (
    <>
      <Button
        color={selectedColor}
        className="btn-selected"
        onClick={handleSelectedColorClick}
      />
      <GameContainer onClick={handleClick} />
    </>
  );
}

export default ButtonContainer;
