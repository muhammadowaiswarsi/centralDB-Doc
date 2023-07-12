import { setReadmeData } from '../redux/reducer';
import { contentConverter } from './contentConverter';
import { generateDocsId } from './docs';

export const getReadmeData = async (api) => {
  return fetch(api)
    .then((response) => response.text())
    .then((data) => {
      return data
        .split('\n')
        .map((item) => item.replaceAll('\n', ''))
        .filter(Boolean)
        .reduce(
          (prev, curr) => {
            let newObj = { isStart: prev.isStart, arr: prev.arr, prevVal: prev.prevVal };
            if (curr.trim().startsWith('```') && !prev.prevVal && !prev.isStart) {
              newObj.prevVal = '```';
              newObj.isStart = true;
            } else if (!!prev.prevVal && !!prev.isStart && !curr.trim().startsWith('```')) {
              newObj.prevVal += curr.trim() + '\n';
            } else if (!!prev.prevVal && !!prev.isStart && !!curr.trim().startsWith('```')) {
              newObj.isStart = false;
              newObj.prevVal = '';
              newObj.arr.push(prev.prevVal + '```');
            } else {
              newObj.arr.push(curr.trim());
            }
            return newObj;
          },
          { isStart: false, arr: [], prevVal: '' },
        ).arr;
    })
    .catch((error) => console.log(error));
};

export const generateJsonForSearching = (content, path) => {
  return Object.entries(
    content
      .map((value) => contentConverter(value, path))
      .filter(Boolean)
      .reduce(
        (prev, curr) => {
          if (curr.startsWith('#')) {
            prev.temp = curr.replaceAll('#', '').trim();
            if (!prev.data[prev.temp]) {
              prev.data[prev.temp] = '';
            }
            prev.data[prev.temp] = curr.replaceAll('#', '').trim() + ' ';
          } else {
            prev.data[prev.temp] += curr;
          }
          return prev;
        },
        { data: {}, temp: '' },
      ).data,
  ).map(([key, val]) => ({
    [key]: val,
    path: `${path}#${generateDocsId(`#${key}`)}`,
  }));
};

export const getAllApisData = async (dispatch) => {
  const status = await getReadmeData(
    'https://raw.githubusercontent.com/statsig-io/statuspage/main/README.md',
  );
  const docs = await getReadmeData('https://raw.githubusercontent.com/Centraldb/c7/main/README.md');
  dispatch(setReadmeData({ docs, status }));
};
