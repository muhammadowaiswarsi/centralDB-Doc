import React from 'react'
import "../Footer/style.css"

const Footer = () => {
    return (
        <>
            <footer class="page-footer">
                <div class="container">
                    <p>This project is governed by the MIT license and is protected by trademark rights. Selling this software without the permission of Erickson Holding LTD or Softywa LTD is strictly prohibited. It is imperative that this software remains free of charge.</p>
                    <hr />
                    <div class="footer-legal">
                        <div class="d-inline-block copyright">
                            <p class="d-inline-block">Copyright © Softywa LTD | CentralDB . All rights reserved.</p>
                        </div>
                        <div class="d-inline-block legal-links">
                        <div class="d-inline-block item">
                                <a href="/privacy-policy">
                                <h5>Privacy Policy</h5></a>
                            </div>
                            <div class="d-inline-block item">
                            </div>
                            <div class="d-inline-block item">
                                <a href="/terms-of-use">
                                <h5>Terms of Use</h5></a>
                            </div>
                            <div class="d-inline-block item">
                                <a href="/legal">
                                <h5>Legal</h5></a>
                            </div>
                            <div class="d-inline-block item">
                                <a href="/license">
                                    <h5 >License</h5></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer