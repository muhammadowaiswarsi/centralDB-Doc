export const generateDocsId = (item) => {
  return '#' + item?.slice(1).trim().replaceAll(' ', '-').replaceAll('.', '');
};
