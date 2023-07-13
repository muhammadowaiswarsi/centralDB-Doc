import React from 'react';
import CodeSnippet from '../codeSnippet/index';
import { generateAltText, generateDocsId, generateRelativePath } from '../../helper.js/docs';
import './style.css';

const ContentWrapper = ({ value, url, index }) => {
  switch (true) {
    case value.startsWith('##'):
      return (
        <h2 className={index > 0 && 'steps'} id={generateDocsId(value).replaceAll('#', '')}>
          {value.replaceAll('#', '')} <hr />
        </h2>
      );

    case value.startsWith('#'):
      return (
        <h1 className={index > 0 && 'steps'} id={generateDocsId(value).replaceAll('#', '')}>
          {value.replaceAll('#', '')}
          <hr />
        </h1>
      );

    case value.startsWith('[!'): {
      let relativePath = url.slice(url.indexOf('.com') + 4);
      let src = value.slice(value.indexOf('(') + 1, value.indexOf(')'));
      src = `https://github.com${generateRelativePath(src, relativePath)}`;
      let href = value.slice(value.lastIndexOf('(') + 1, value.lastIndexOf(')'));
      return (
        <a className='steps' href={href} target='_blank' rel='noreferrer'>
          <img src={src} alt={generateAltText(value.slice(1))} />
        </a>
      );
    }

    case value.startsWith('!'):
      const src = value.slice(value.indexOf('(') + 1, value.length - 1);
      const alt = generateAltText(value);
      return <img src={src} alt={alt} style={{ maxWidth: '100%' }} />;

    case value.startsWith('```'):
      return <CodeSnippet text={value.replaceAll('```', '')} />;

    case value.startsWith('-'):
      return (
        <ul>
          <li className='bullet-list'>
            <a className='anchor' target='_blank' href={value.slice(1)} rel='noreferrer'>
              {value.slice(1)}
            </a>
          </li>
        </ul>
      );

    case value.includes('[') && value.includes(']('): {
      let href = `${value.slice(value.indexOf('](') + 2, value.indexOf(')'))}`;
      let labelIndex = value.indexOf('[');
      return (
        <p>
          {value.slice(0, value.indexOf('['))}
          <a className='anchor' href={href} target='_blank' rel='noreferrer'>
            {value.slice(
              labelIndex + 1,
              value.slice(labelIndex + 1).indexOf('](') + labelIndex + 1,
            )}
          </a>
        </p>
      );
    }

    case value.includes('`') && !value.includes('``'): {
      return (
        <p>
          {value.split(' ').map((item) =>
            item?.includes('`') ? (
              <>
                {item.slice(0, item.indexOf('`'))}
                <code className='code'>
                  {item.slice(
                    item.indexOf('`') + 1,
                    item.indexOf('`') + 1 + item.slice(item.indexOf('`') + 1).indexOf('`'),
                  )}
                </code>
                {item.slice(item.slice(item.indexOf('`') + 1).indexOf('`') + item.indexOf('`') + 2)}
              </>
            ) : (
              ` ${item} `
            ),
          )}
        </p>
      );
    }
    default:
      return <p>{value}</p>;
  }
};

export default ContentWrapper;
