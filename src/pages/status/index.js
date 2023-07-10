import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Sidebar from '../../components/sideBar';
import Content from './content';

const Status = () => {
  const [shown, setIsShown] = useState(true);
  const [content, setContent] = useState([]);

  return (
    <>
      <Navbar setIsShown={setIsShown} shown={shown} />
      <Sidebar
        shown={shown}
        setIsShown={setIsShown}
        sidebarLinks={content.filter((item) => item.trim().startsWith('#'))}
        Component={Content}
        ComponentProps={{ content, setContent }}
      />
      <Footer />
    </>
  );
};

export default Status;
