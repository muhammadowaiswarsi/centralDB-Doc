export const contentConverter = (value) => {
  switch (true) {
    case value.startsWith('#'):
      return '#' + value.slice(1);

    case value.startsWith('[!'): {
      return '';
    }

    case value.startsWith('!'):
      return '';

    case value.startsWith('```'):
      return value.replaceAll('```', '');

    case value.startsWith('-'):
      return value.slice(1);

    case value.includes('[') && value.includes(']('): {
      let labelIndex = value.indexOf('[');
      return `${value.slice(0, value.indexOf('['))} ${value.slice(
        labelIndex + 1,
        value.slice(labelIndex + 1).indexOf('](') + labelIndex + 1,
      )}`;
    }

    case value.includes('`') && !value.includes('``'): {
      return value
        .split(' ')
        .map((item) =>
          item?.includes('`')
            ? `${item.slice(0, item.indexOf('`'))}${item.slice(
                item.indexOf('`') + 1,
                item.indexOf('`') + 1 + item.slice(item.indexOf('`') + 1).indexOf('`'),
              )}${item.slice(
                item.slice(item.indexOf('`') + 1).indexOf('`') + item.indexOf('`') + 2,
              )}`
            : ` ${item} `,
        )
        .join(' ');
    }
    default:
      return value;
  }
};
