import React from 'react';
import CodeSnippet from '../../../components/codeSnippet';
import { generateDocsId } from '../../../helper.js/docs';

const ContentWrapper = ({ value }) => {
  console.log(value.startsWith('-'), true);
  switch (true) {
    case value.startsWith('#'):
      return (
        <h1 className='steps' id={generateDocsId(value).replaceAll('#', '')}>
          {value.replaceAll('#', '')}
          <hr />
        </h1>
      );
    case value.startsWith('##'):
      return (
        <h2 id={generateDocsId(value).replaceAll('#', '')}>
          {value.replaceAll('#', '')} <hr />
        </h2>
      );
    case value.startsWith('!'):
      const src = value.slice(value.indexOf('(') + 1, value.length - 1);
      const alt =
        value.indexOf('[') !== -1 && value.indexOf(']') !== -1
          ? value.slice(value.indexOf('[') + 1, value.indexOf(']'))
          : 'alt text';
      return <img src={src} alt={alt} style={{ maxWidth: '100%' }} />;
    case value.startsWith('```'):
      return <CodeSnippet text={value.replaceAll('```', '')} />;
    case value.startsWith('-'):
      return (
        <ul>
          <li style={{ listStyle: 'disc' }}>
            <a style={{ color: 'blue' }} href={value}>
              {value.slice(1)}
            </a>
          </li>
        </ul>
      );
    default:
      return <p>{value}</p>;
  }
};

export default ContentWrapper;
