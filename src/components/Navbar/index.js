import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import c7text from "../../assets/img/c7-text.svg";
import "../Navbar/style.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ setIsShown, shown }) => {
    const location = useLocation();
    console.log(location?.pathname === "/docs", "path");

    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <nav className="navDiv navbar navbar-light navbar-expand sticky-top py-3">
                <div className="container">
                    {shown && (
                        <span className='toggle'>
                            <GiHamburgerMenu onClick={() => setIsShown(!shown)} />
                        </span>
                    )}
                    <button className={`navbar-brand d-flex align-items-center btn`} onClick={() => handleNavigation("/")}>
                        <span>
                            <img className="img-fluid" src={c7text} width="170" loading="eager" alt='hello' />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-2">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="button btn btn-success ms-md-2" onClick={() => handleNavigation('/')}>Dashboard</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-light navbar-expand py-3 whiteBackground">
                <div className="container">
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <i className="fab fa-github"></i>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className={`navLink nav-link`} target="_blank" href='https://github.com/centraldb'  rel="noreferrer">Github</a>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link btn-hover ${location?.pathname === "/" ? "actives" : ""}`} onClick={() => handleNavigation("/")}>Status</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link btn-hover ${location?.pathname === "#" ? "actives" : ""}`} onClick={() => handleNavigation("#")}>Node</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link btn-hover ${location?.pathname === "/docs" ? "actives" : ""}`} onClick={() => handleNavigation("/docs")}>Docs</button>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <input className="form-control-sm searchInput" type="search" placeholder="Search" />
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
