import React from 'react'
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../PagesComponents/Portfolio components/Portfolio.css"
import logo from '../../assets/blog_images/logo-name.png'
import bg from "/home/muhammadsubhan/Desktop/gastby-project/src/assets/blog_images/portfolio image.jpg"

import Header from "../GlobalComponents/Header/Header"
function Portfolio({pageContext}) {
 const {Item_Details}=pageContext
 console.log(Item_Details,"items")
//  console.log(bg,"bg")
const Image=Item_Details.images.file.url
const image= Image.replace('//','https://').trim()

const portfolioImage=Item_Details.portfolioImages[0].file.url
const Portfolioimage1= portfolioImage.replace('//','https://').trim()

const portfolioImage2=Item_Details.portfolioImages[1].file.url
const Portfolioimage2= portfolioImage2.replace('//','https://').trim()
  return (
    <>
      <Header />
      <div className="port__wrapper">

        <div className="main__div_blog">
            <div style={{backgroundImage:`url(${Portfolioimage1})`,width:"100%",backgroundSize:"cover"}}>
            <div className="port__avatar">
            <span>
              We can help you to digitize your business,
            </span>
            <p>we want to go beyond.</p>
            {/* <button>Read more</button> */}
          </div>
            </div>
          <div className="article__body py-3">
            <h1 className="portarticle__title py-4" >
              What Ebay Does
            </h1>
            <p className="portsubtitle">
              What transform your traditional business
              model to digital business model, creating
              a patership with our customer.
            </p>
            <br></br>
            <div className="cards">
              <div className="card__grid">
                <div className="card__text">
                  <h3>Strategy</h3>
                  <p>
                    We create a strategy  to become digital
                    available to the market, Evaluating the
                    impact to move the digiital business.
                    </p>
                </div>
              </div>
              <div className="card__grid">
                <div className="card__text">
                  <h3>Strategy</h3>
                  <p>
                    We create a strategy  to become digital
                    available to the market, Evaluating the
                    impact to move the digiital business.
                    </p>
                </div>
              </div>
              <div className="card__grid">
                <div className="card__text">
                  <h3>Strategy</h3>
                  <p>
                    We create a strategy  to become digital
                    available to the market, Evaluating the
                    impact to move the digiital business.
                    </p>
                </div>
              </div>
            </div>
            <div className="searchbar__area">
              <h2>Do you want to go beyond?</h2>
              <div className="search__input">
                <input type="text" className="searchbar" placeholder="Accounting, Engineering, Solid Works, etc" />
                <button className="search__button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="suport__sec">
            <div className="leftSupport__Sec">
              <span className="support__title">
                Everything you need to <span className="inner__title">support you</span> in your dreams
              </span>
              <img src={Portfolioimage2} className="leftSecImg"/>

            </div>
            <div className="rightSupport__Sec">
              <span className="rightSec__title">Contact us</span>
              <form>
                <label>Email:</label><br/>
                <input type="text" placeholder="Enter Email"/><br/>

                <label>Subject:</label><br/>
                <input type="text" placeholder="Enter Subject"/><br/>

                <label>Describe your ideal profession:</label><br/>
                <textarea></textarea><br/>
                <button className="btn btn-primary mt-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="port__intro ">
          <img src={logo} className="logo" />
          <h2 className="py-3">CLIENTE</h2>
        <p style={{fontWeight:"bold",fontSize:"22px"}}>{Item_Details.title}</p>
          <p className="py-2">
           {Item_Details.subtitle}
          </p>
          <p>
            {Item_Details.portfolioShortDescription.portfolioShortDescription}
          </p>

          <h2 style={{wordSpacing:"2px"}}>FECHA</h2>
          <div>
          {Item_Details.timeOfcreation.map(val=>{
            return(
            <li>{val}</li>
            )
          })}
          </div>
        
          

          <h2>&#60;CATEGORIES&#62;</h2>
          {/* <ul>
            <li>Desarallo Web</li>
            <li>Diseno Web</li>
            <li>Ecommerce</li>
            <li>SEO</li>
            <li>Elementor</li>
            <li>Otros</li>
          </ul> */}
           {Item_Details.categories.map(val => {
            return (
              <li>{val}</li>
            )
          })}
         
          <h2 className="py-2" style={{wordSpacing:"2px",fontWeight:"bold"}}>&#60;WEB&#62;</h2>
            {Item_Details.weburl}
          
        </div>
      </div>

    </>

  )
}

export default Portfolio



