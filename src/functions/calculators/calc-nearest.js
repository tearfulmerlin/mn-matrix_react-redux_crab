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

  const nearestValues = nums
    .map(row => row
      .map(cell => ({
        ...cell,
        diff: Math.abs(cell.value - currentCell.value),
      }))
    )
    .flat()
    .sort((a, b) => a.diff - b.diff)
    .filter(cell => cell.uuid !== currentCell.uuid)
    .map(cell => cell.value)

    nearestValues.length = nearestCount;

  return nums
    .map(row => row
      .map(cell => nearestValues.indexOf(cell.value) >= 0
        ? { ...cell, nearest: true }
        : cell
      )
    );
};

export default calcNearestNums;
