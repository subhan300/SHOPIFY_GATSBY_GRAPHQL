import React from 'react'
import './HeroSection.css'
// import {Link} from  "gatsby"
import logo from '../../../assets/all   images/logo.png'
// import Header from "../../GlobalComponents/Header/Header"
function HeroSection() {
    return (
        <section class="hero_section">
        
        <div class="container">
            <div class="hero_content">
                <h6>¡HOLA!</h6>
                <h1>Soy Keylen.</h1>
                <h4>&#60;Ecommerce strategist&#62;</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim.</p>
                <a href="#" class="theme_btn">CONOCEME</a>
                <div class="hero_logo">
                     <img src={logo} alt=""/>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeroSection
