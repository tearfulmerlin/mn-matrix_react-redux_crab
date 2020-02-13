const calcNearestNums = (nums, nearestCount, currentCell) => {
  if (currentCell === null) {
    return nums
      .map(row => row
        .map(cell => cell.nearest === true
          ? { ...cell, nearest: false }
          : cell
        )
      );
  }


  const sortedNums = nums
    .flat()
    .sort((a, b) => (
      Math.abs(a.value - currentCell.value) - Math.abs(b.value - currentCell.value)
    ));

  const nearestValues = new Set();
  let i = 0;

  while (nearestValues.size < nearestCount) {
    nearestValues.add(sortedNums[i].value);
    i++;
  }

  return nums
    .map(row => row
      .map(cell => nearestValues.has(cell.value) && cell.uuid !== currentCell.uuid
        ? { ...cell, nearest: true }
        : cell
      )
    );
};

export default calcNearestNums;
