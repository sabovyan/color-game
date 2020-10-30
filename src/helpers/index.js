export const generateRenderData = (data, maxCount) => {
  const clonedData = copyArray(data);

  return clonedData.map((colors) => {
    if (colors.length < maxCount) {
      while (colors.length !== maxCount) colors.push('');
    }

    return colors;
  });
};

export const copyArray = (arr) => {
  return arr.map((value) => [...value]);
};

export const isGameOver = (handleColors, setFinished, maxCount) => {
  let count = 0;
  handleColors.forEach((colors) => {
    if (colors.length === maxCount) {
      const setOfColors = new Set();
      colors.forEach((color) => {
        setOfColors.add(color);
      });
      if (setOfColors.size === 1) {
        count += 1;
      }
    }
  });

  if (count === 4) {
    setFinished();
    return true;
  }
  return false;
};
