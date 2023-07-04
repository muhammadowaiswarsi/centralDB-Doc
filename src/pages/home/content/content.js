import React from 'react';
import openc7 from "../../../assets/img/openc7.svg";
import "../content/style.css";

const Content = () => {
    return (
        <>
            <section className="py-4 py-xl-5 custom-section1">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <h2><img className="img-fluid" src={openc7} width="200" alt="Logo" /></h2>
                    <p className="custom-paragraph">C7 stands out as a unique blockchain platform dedicated to decentralized data transmission, distinguishing itself by leveraging a decentralized database architecture, thus elevating trust and reliability to unprecedented levels.</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card shadow border-start-primary py-2">
                                <div className="card-body pt-0 pb-0">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col me-2">
                                            <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span className="custom-link"><a href="#">local download</a></span></div>
                                            <div className="text-dark fw-bold h5 mb-0"><span className="custom-span">C7STW</span><span className="custom-span-small">V12.24.5.2</span></div>
                                        </div>
                                        <div className="col-auto"><i className="fas fa-cloud-download-alt fa-2x custom-iconBlue" title="V12.24.5.2 - running ubuntu 17.04"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card shadow border-start-primary py-2">
                                <div className="card-body pt-0 pb-0">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col me-2">
                                            <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span className="custom-link"><a href="#">CLOUD INSTALLER</a></span></div>
                                            <div className="text-dark fw-bold h5 mb-0"><span className="custom-span">OC7C</span><span className="custom-span-small">V12.3.4.88</span></div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-server fa-2x custom-iconGreen" title="V12.3.4.88 - running ubuntu 17.04 (Linux daemon)"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container py-4 py-xl-5 ">
                <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-4 custom-card custom-card1" >
                                <h4 className="card-title custom-text1-title1">Central 7 DT</h4>
                                <p className="card-text custom-text1-title1">DT stands for data transfer. With DT, anyone can extract data from the MySQL database and set up a reliable database exclusively for you or your clients, ensuring your privacy.</p>
                                <a className="btn btn-primary custom-button" role="button" data-bss-hover-animate="pulse" href="/netzwerk.html">learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-4 custom-card2" >
                                <h4 className="card-title custom-text1-title2">CDCI Token</h4>
                                <p className="card-text custom-text1-title2">The CDCI token (Central Database Currency infrastructure) is a currency that operates on the C7 network, facilitating secure and efficient money transfers within the database.</p>
                                <a className="btn btn-primary custom-button" role="button" data-bss-hover-animate="pulse" href="/netzwerk.html">learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Content;
