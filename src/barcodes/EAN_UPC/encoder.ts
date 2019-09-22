import { BINARIES } from './constants';

// Encode data string
const encode = (data: string = '', structure: string | string[] = [], separator = '') => {
  let encoded = data
    .split('')
    .map((_, idx) => BINARIES[structure[idx]])
    .map((val, idx) => (val ? val[data[idx]] : ''));

  if (separator) {
    const last = data.length - 1;
    encoded = encoded.map((val, idx) => (idx < last ? val + separator : val));
  }

  return encoded.join('');
};

export default encode;
