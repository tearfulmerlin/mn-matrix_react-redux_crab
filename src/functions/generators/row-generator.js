import cellGenerator from './cell-generator';

const rowGenerator = columnCount => {
  const row = [];

  for (let i = 0; i < columnCount; i++) {
    row.push(cellGenerator());
  }

  return row;
}

export default rowGenerator;
