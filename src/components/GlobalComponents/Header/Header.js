// import React from 'react'
import {Link} from "gatsby"

import React, { useEffect, useState } from 'react'
import './Header.css'
// import { NavLink } from 'react-router-dom'


// import logo from '../Assets/Images/Group 143.png'
// import signinIcon from '../Assets/Images/sign in icon.png'
// import MenuIcon from '@material-ui/icons/Menu'
// import CloseIcon from '@material-ui/icons/Close'

function Navbar() {
    
    const [show, handleShow] = useState(false);

    const transitionNavbar= () => {
        if (window.scrollY > 50) {
            handleShow(true);
        }
        else {
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar); 
    }, []);

    const [open, setOpen] = useState(false);
    
    return (
        <div className={`navbar ${show && 'nav__scroll'}`}>
            <Link to="/">
                <div className="logo__container">
                    {/* <img src="data:image/jpeg;base64,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" className="logo" /> */}
                    <p style={{color:"black",fontSize:"2rem"}} className={ `${show && 'nav__scroll_menu'} `}>SHOPPING ROCKET</p>
                </div>
            </Link>


            <div className="click__menu" onClick={()=> setOpen(!open)}><svg  className={ `${show && 'nav__scroll_menu'} `} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></div>
            <div className="nav__content" style={{ display: open ? "flex" : "flex", left: open ? "0" : "-100%"}}>
                <Link to="/" className="nav__link" style={{marginTop:"-12px"}}><span  className={ `${show && 'nav__scroll_menu'} `}style={{fontSize:"2rem",color:"black !important"}}>Home</span></Link>
                <Link to="/Blog" className="nav__link" style={{marginTop:"-12px"}}><span className={ `${show && 'nav__scroll_menu'} `} style={{fontSize:"2rem",color:"black !important"}}>Blog</span></Link>
                <Link to="/Portfolio" className="nav__link" style={{marginTop:"-12px"}}><span className={ `${show && 'nav__scroll_menu'} `} style={{fontSize:"2rem",color:"black !important"}}>Portfolio</span></Link>
             
                <div className="close__menu" onClick={()=> setOpen(false)} style={{display:"none"}}>
                <svg className="close_menu_img" xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar