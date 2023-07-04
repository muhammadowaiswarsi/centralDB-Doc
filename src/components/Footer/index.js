import React from 'react';
import "../Footer/style.css";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
      navigate(path);
      window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className="page-footer">
        <div className="container">
          <p>This project is governed by the MIT license and is protected by trademark rights. Selling this software without the permission of Erickson Holding LTD or Softywa LTD is strictly prohibited. It is imperative that this software remains free of charge.</p>
          <hr />
          <div className="footer-legal">
            <div className="d-inline-block copyright">
              <p className="d-inline-block">Copyright © Softywa LTD | CentralDB . All rights reserved.</p>
            </div>
            <div className="d-inline-block legal-links">
              <div className="d-inline-block item">
                <button className="footer-link btn" onClick={() => handleNavigation("/privacy-policy")}>
                  <h5>Privacy Policy</h5>
                </button>
              </div>
              <div className="d-inline-block item">
                <button className="footer-link btn" onClick={() => handleNavigation("/terms-of-use")}>
                  <h5>Terms of Use</h5>
                </button>
              </div>
              <div className="d-inline-block item">
                <button className="footer-link btn" onClick={() => handleNavigation("/legal")}>
                  <h5>Legal</h5>
                </button>
              </div>
              <div className="d-inline-block item">
                <button className="footer-link btn" onClick={() => handleNavigation("/license")}>
                  <h5>License</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
