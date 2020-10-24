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
  let status = true;
  const anotherSet = new Set();

  handleColors.forEach((colors) => {
    if (colors.length) {
      if (colors.length === maxCount) {
        const uniqueObj = new Set();
        colors.forEach((color) => uniqueObj.add(color));
        if (uniqueObj.size === 1) anotherSet.add(uniqueObj);

        return;
      }

      status = false;
    }
  });

  if (anotherSet.size === 3) {
    status = true;
  }

  if (status) {
    setFinished();
  }
  return status;
};
