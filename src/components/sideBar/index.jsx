import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse,  } from 'react-bootstrap';
import Content from "../../pages/docs/content";
// import Navbar from '../Navbar';
// import Footer from '../Footer';


const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeContent, setActiveContent] = useState(0);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleContentSwitch = (content) => {
    setActiveContent(content);
  };

  const sidebarLinks = [
    { key: 'Get Started', value: 'start' },
    { key: 'Contat us', value: 'contect' },
    { key: 'About us', value: 'abouts' },
  ];
  const Comp1 = () => {
    return <div>
      <h2>Comp 1</h2>
      <p>Content for Contact Us option goes here.</p>
    </div>;
  };
    const Comp2 = () => {
      return <div>
        <h2>Comp 2</h2>
        <p>Content for Contact Us option goes here.</p>
      </div>;
    };
    const Comp3 = () => {
      return <div>
        <h2>Comp 3</h2>
        <p>Content for Contact Us option goes here.</p>
      </div>;
  };
  const components = [<Content/>, <Comp2/>, <Comp3/>];
  
  return (
    <>
    <Container
    className={`sidebar${isCollapsed ? ' collapsed' : ''}`}
    style={{ display: 'flex', paddingTop: '0', maxWidth:"100%" }}
    >
    <Row style={{ display: 'flex', flexDirection: 'column', width:"100%" }}>
        <Col
        xs={3}
        style={{ width: isCollapsed ? '150px' : '350px', height: '100vh', position:"fixed"}}
        >
          <Button variant='primary' onClick={toggleCollapse}>
            Toggle Sidebar
            </Button>
            <div style={{ display: 'flex', flexDirection: 'column',overflow:"scroll",height:"100%" }}>
            {sidebarLinks.map((item, index) => (
              <span onClick={() => setActiveContent(index)} className='item'>
              {item.value}
              </span>
            ))}
          </div>
        </Col>
        <Col xs={9} className='contentCol' style={{marginLeft:isCollapsed ? '150px' : '350px',}}>
        <div>
        {components[activeContent]}
        </div>
        </Col>
        </Row>
        </Container>
        </>
  );
};

export default App;
