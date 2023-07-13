import React from 'react';
import { useSelector } from 'react-redux';
import { statusApi } from '../../../constatnt/constant';
import ReadmeDataWrapper from '../../../components/readmeDataWrapper/ReadmeDataWrapper';

const Content = () => {
  const state = useSelector((state) => state?.data?.status);

  return <ReadmeDataWrapper state={state} url={statusApi} />;
};

export default Content;
