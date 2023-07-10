import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './style.css';

const App = ({ shown, setIsShown, sidebarLinks, Component }) => {
  const [activeSection, setActiveSection] = useState(sidebarLinks[0].id);
  const navigate = useNavigate();
  console.log(activeSection, 'activeSection');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsShown(true);
      }
    };

    const handleScroll = () => {
      const sections = sidebarLinks.map((item) => item.id);
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
        const section = document.getElementById(sections[i]?.slice(1));
        const sectionTop = section?.offsetTop - 155.44;
        const sectionBottom = sectionTop + section?.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = sections[i];
          break;
        }
      }
      if (scrollPosition < document.getElementById(sections[0]?.slice(1))?.offsetTop - 155.44) {
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
    window.scrollTo(0, document.getElementById(id?.slice(1))?.offsetTop - 155.44);
    navigate(id);
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
            <a className={activeSection === item?.id ? 'active ' : ''}>
              <span
                onClick={() => {
                  func(item?.id);
                  setIsShown(true);
                }}
                className='item'
              >
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </Col>
      <Col sm={12} md={8} lg={9} xl={9} xxl={10} className='contentCol col2 mb-8'>
        <div>{<Component />}</div>
      </Col>
    </Row>
  );
};

export default App;
