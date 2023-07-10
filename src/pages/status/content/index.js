import React, { useEffect } from 'react';
import '../style.css';
import ContentWrapper from './ContentWrapper';
import { getReadmeData } from '../../../helper.js/getReadmeData';

const Content = ({ content, setContent }) => {
  useEffect(() => {
    getReadmeData(
      'https://raw.githubusercontent.com/statsig-io/statuspage/main/README.md',
      setContent,
    );
  }, []);

  return (
    <div class='container mt-3 m-bottom'>
      <div class='row'>
        <div class='col-lg-9 col-lg-offset-2 col-md-11 col-md-offset-1 m-auto'>
          {content.map((item) => {
            return <ContentWrapper value={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
