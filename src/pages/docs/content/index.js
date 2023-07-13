import React from 'react';
import { useSelector } from 'react-redux';
import { docsApi } from '../../../constatnt/constant';
import ReadmeDataWrapper from '../../../components/readmeDataWrapper/ReadmeDataWrapper';

const Content = () => {
  const state = useSelector((state) => state?.data?.docs);

  return <ReadmeDataWrapper state={state} url={docsApi} />;
};

export default Content;
