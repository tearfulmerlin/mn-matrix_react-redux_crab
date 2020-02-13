const calcSum = row => row.reduce((a, {value}) => a.value + value || a + value);

export default calcSum;
