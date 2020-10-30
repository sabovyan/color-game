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
  let status = false;
  let count = 0;

  handleColors.forEach((colors) => {
    if (colors.length && colors.length === maxCount) {
      count += 1;
    }
  });

  if (count === 4) {
    status = true;
  }

  if (status) {
    setFinished();
  }
  return status;
};
