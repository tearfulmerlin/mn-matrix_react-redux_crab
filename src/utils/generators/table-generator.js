import cellGenerator from './cell-generator';

const tableGenerator = ({ rowCount, columnCount }) => {
  const nums = [];

  for (let i = 0; i < rowCount; i++) {
    nums.push([]);
    for (let j = 0; j < columnCount; j++)
      nums[i].push(cellGenerator());
  }

  return nums;
};

export default tableGenerator;
