import React, { useEffect } from 'react';
import ContentWrapper from '../../../components/ContentWrapper.js/ContentWrapper';
import { useSelector } from 'react-redux';
import { docsApi } from '../../../constatnt/constant';

const Content = () => {
  const state = useSelector((state) => state?.data?.docs);

  return (
    <div style={{ marginBottom: '120px' }} class='container'>
      <div class='row mt-3'>
        <div class='col-lg-9 col-lg-offset-2 col-md-11 col-md-offset-1 m-auto'>
          {state.map((item, index) => {
            return <ContentWrapper index={index} value={item} url={docsApi} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
