import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import c7text from "../../assets/img/c7-text.svg"
import "../Navbar/style.css"


const Navbar = () => {
    return (
        <div>
            <nav className="navDiv navbar navbar-light navbar-expand sticky-top py-3">
                <div className="container"><a className="navbar-brand d-flex align-items-center" href="/"><span>
                    <img className="img-fluid" src={c7text} width="170" loading="eager" alt='hello' />
                </span></a>
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2">
                        <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-2">
                        <ul className="navbar-nav ms-auto"></ul>
                        <a className="button btn btn-success ms-md-2" role="button" href="/"
                        >Dashboard</a>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-light navbar-expand py-3 whiteBackground">
                <div className="container"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button><i className="fab fa-github"></i>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><a className="navLink nav-link active" target='_blank' href="https://github.com/centraldb" rel="noreferrer"
                            >Github</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Node</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Status</a></li>
                            <li className="nav-item"><a className="nav-link" href="/docs">Docs</a></li>
                        </ul>
                        <span className="navbar-text">
                            <input className="form-control-sm searchInput" type="search" placeholder="Search" />
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar