import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Sidebar from '../../components/sideBar';
import Content from './content';
import { sidebarLinks } from './content';

const Docs = () => {
  const [shown, setIsShown] = useState(true);

  return (
    <>
      <Navbar setIsShown={setIsShown} shown={shown} />
      <Sidebar
        shown={shown}
        setIsShown={setIsShown}
        sidebarLinks={sidebarLinks}
        Component={Content}
      />
      <Footer />
    </>
  );
};

export default Docs;
