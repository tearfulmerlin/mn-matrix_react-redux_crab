const calcNearestNums = (nums, currentCell, nearestCount) => {
  if (nearestCount === null) {
    return nums;
  }

  const numsWithDiff = [];

  for (let i = 0; i< nums.length; i++) {
    numsWithDiff.push(...nums[i]
      .map(cell => ({ ...cell, diff: Math.abs(cell.value - currentCell.value)}))
    );
  }

  const sorted = numsWithDiff
    .sort((a, b) => a.diff - b.diff)
    .filter(el => el.uuid !== currentCell.uuid);

  sorted.length = nearestCount;

  return sorted;
};

export default calcNearestNums;
