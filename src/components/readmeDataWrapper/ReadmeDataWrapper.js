import React from 'react';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

const ReadmeDataWrapper = ({ state, url }) => {
  return (
    <div style={{ marginBottom: '120px' }} class='container'>
      <div class='row mt-3'>
        <div class='col-lg-9 col-lg-offset-2 col-md-11 col-md-offset-1 m-auto'>
          {state?.map((item, index) => {
            return <ContentWrapper index={index} value={item} url={url} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ReadmeDataWrapper;
