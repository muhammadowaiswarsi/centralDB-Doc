import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './style.css';
import { generateDocsId } from '../../helper.js/docs';

const App = ({ shown, setIsShown, sidebarLinks, Component, ComponentProps }) => {
  const [activeSection, setActiveSection] = useState(generateDocsId(sidebarLinks[0]));
  const navigate = useNavigate();

  useEffect(() => {
    if (shown) setActiveSection(generateDocsId(sidebarLinks[0]));
  }, [sidebarLinks]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsShown(true);
      }
    };

    const handleScroll = () => {
      const sections = sidebarLinks.map((item) => generateDocsId(item));
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.clientHeight;

      const bottomScrollPosition = bodyHeight - windowHeight;

      if (scrollPosition >= bottomScrollPosition) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      let currentSection = '';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]?.replaceAll('#', ''));
        const sectionTop = section?.offsetTop - 155.44;
        const sectionBottom = sectionTop + section?.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = sections[i];
          break;
        }
      }
      if (
        scrollPosition <
        document.getElementById(sections[0]?.replaceAll('#', ''))?.offsetTop - 155.44
      ) {
        currentSection = sections[0];
      }
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sidebarLinks, setIsShown]);

  const func = (id) => {
    window.scrollTo(0, document.getElementById(id.replaceAll('#', ''))?.offsetTop - 155.44);
    navigate(id);
    setActiveSection(id);
  };

  return (
    <Row className='container sidebar-row'>
      <Col md={4} lg={3} xl={3} xxl={2} className={shown ? 'col1' : 'hidden'}>
        {!shown && (
          <div>
            <div className='sidebar-heading d-flex justify-content-between align-items-center'>
              <h5 className='offcanvas-title' id='bdSidebarOffcanvasLabel'>
                Browse docs
              </h5>
              <button onClick={() => setIsShown(true)} className='btn-close'></button>
            </div>
            <hr />
          </div>
        )}
        <div className='sidebar-links'>
          {sidebarLinks.map((item, index) => (
            <a className={activeSection == generateDocsId(item) ? 'active ' : ''}>
              <span
                style={{ width: '100%' }}
                onClick={() => {
                  func(generateDocsId(item));
                  setIsShown(true);
                }}
                className='item'
              >
                {item.replaceAll('#', '')}
              </span>
            </a>
          ))}
        </div>
      </Col>
      <Col sm={12} md={8} lg={9} xl={9} xxl={10} className='contentCol col2 mb-8'>
        <div>{<Component {...ComponentProps} />}</div>
      </Col>
    </Row>
  );
};

export default App;
