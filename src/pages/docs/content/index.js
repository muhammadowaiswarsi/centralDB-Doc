import React, { useEffect } from 'react';
import ContentWrapper from '../../../components/ContentWrapper.js/ContentWrapper';
import { getReadmeData } from '../../../helper.js/getReadmeData';

const Content = ({ content, setContent }) => {
  const api = 'https://raw.githubusercontent.com/Centraldb/c7/main/README.md';
  useEffect(() => {
    getReadmeData(api, setContent);
  }, []);

  return (
    <div style={{ marginBottom: '120px' }} class='container'>
      <div class='row mt-3'>
        <div class='col-lg-9 col-lg-offset-2 col-md-11 col-md-offset-1 m-auto'>
          {content.map((item, index) => {
            return <ContentWrapper index={index} value={item} url={api} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
