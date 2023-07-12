import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Sidebar from '../../components/sideBar';
import Content from './content';
import { useSelector } from 'react-redux';

const Status = () => {
  const [shown, setIsShown] = useState(true);
  const state = useSelector((state) => state?.data?.status);

  return (
    <>
      <Navbar setIsShown={setIsShown} shown={shown} />
      <Sidebar
        shown={shown}
        setIsShown={setIsShown}
        sidebarLinks={state.filter((item) => item.trim().startsWith('#'))}
        Component={Content}
      />
      <Footer />
    </>
  );
};

export default Status;
