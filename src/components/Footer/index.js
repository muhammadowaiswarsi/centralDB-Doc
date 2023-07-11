import React from 'react';
import '../Footer/style.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className='page-footer'>
        <div className='container'>
          <p>
            This project is governed by the MIT license and is protected by trademark rights.
            Selling this software without the permission of Erickson Holding LTD or Softywa LTD is
            strictly prohibited. It is imperative that this software remains free of charge.
          </p>
          <hr />
          <div className='footer-legal'>
            <div className='d-inline-block copyright'>
              <p className='d-inline-block'>
                Copyright © Softywa LTD | CentralDB . All rights reserved.
              </p>
            </div>
            <div className='d-inline-block legal-links'>
              {footerLinks.map((val, index) => {
                return (
                  <div key={index} className='d-inline-block item'>
                    <button
                      className={`footer-link btn ${
                        location?.pathname === val?.path ? 'actives' : ''
                      }`}
                      onClick={() => handleNavigation(val?.path)}
                    >
                      <h5>{val?.text}</h5>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const footerLinks = [
  { text: 'Privacy Policy', path: '/privacy-policy' },
  { text: 'Terms of Use', path: '/terms-of-use' },
  { text: 'Legal', path: '/legal' },
  { text: 'License', path: '/license' },
];
