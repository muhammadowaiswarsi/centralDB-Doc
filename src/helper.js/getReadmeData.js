export const getReadmeData = (api, setContent) => {
  fetch(api)
    .then((response) => response.text())
    .then((data) => {
      setContent(
        data
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
          ).arr,
      );
    })
    .catch((error) => console.log(error));
};
