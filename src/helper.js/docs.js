export const generateDocsId = (item) => {
  return (
    '#' + item?.replaceAll('#', '').trim().replaceAll(' ', '-').replaceAll('.', '').toLowerCase()
  );
};

export const generateRelativePath = (absolutePath, relativePath) => {
  while (absolutePath.startsWith('../')) {
    relativePath = relativePath.slice(0, relativePath.lastIndexOf('/'));
    absolutePath = absolutePath.slice(3);
  }
  return `${relativePath}/${absolutePath}`;
};

export const generateAltText = (value) => {
  return value.indexOf('[') !== -1 && value.indexOf(']') !== -1
    ? value.slice(value.indexOf('[') + 1, value.indexOf(']'))
    : 'alt text';
};
