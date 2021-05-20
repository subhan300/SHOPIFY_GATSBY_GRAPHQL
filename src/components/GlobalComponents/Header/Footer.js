import React from 'react'
import  './Footer.css'
// import footerLogo from '../../../assets/all   images/footer-logo.png'

function Footer() {
    return (
        <div>
            
    <footer className="footer_section ">
        <div className="container">
            <div className="footer_logo">
                {/* <img src={footerLogo} alt="logo"/> */}
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            </div>
            <div className="bottom">
                <span>Copyright © 2020 <a href="">Keylen Jaimes</a>.  |  Todos los derechos reservados.</span>
                <ul>
                    {/* <li><i className="fab fa-facebook-square"></i></li>
                    <li><i className="fab fa-instagram"></i></li> */}
                </ul>
            </div>
        </div>
    </footer>

        </div>
    )
}

export default Footer
