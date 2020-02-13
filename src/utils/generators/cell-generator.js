import uuidv1 from 'uuid/v1';

const cellGenerator = () => {
  let value;

  do {
    value = Math.trunc(Math.random()*1000);
  } while (value < 100);

  return {
    uuid: uuidv1(),
    value,
  };
};

export default cellGenerator;
