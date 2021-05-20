import React from 'react'
import './PortfolioSection.css'
import item from '../../../assets/all   images/item.jpg'
import {Link} from "gatsby"
function PortfolioSection({DATA}) {
    // console.log(DATA,"DATA")
    // console.log(Data)
 

   
let data=DATA.filter(city =>city.featuredportfolio==true)


    return (
        <div>
                <section className="portafolio_section">
        <div className="container">
            <div className="header">
                <h6>&#60;PORTAFOLIO&#62;</h6>
            </div>
            <div className="row">
                 {data.map(val=>{
                    //  console.log(val,"val")
                          const Images_trim=val.images.file.url
                        //   console.log(val.portfolioShortDescription.portfolioShortDescription)
                          const image= Images_trim.replace('//','https://').trim()

                     return(
                        <div class="col-lg-3 col-md-6 py-5" >
                                         <div className="portfolio_item">
                                            <img src={image}></img>
                                      
                                          </div>
                                       <div ><p >{val.portfolioShortDescription.portfolioShortDescription}</p></div>
                                       <Link to={`http://localhost:8000/Portfolio/${val.slug}`}> <div className="text-center py-3"><button type="button" class="btn btn-warning ">Read More</button></div></Link>
                        </div>
                     )
                 })}
                <div className="col-lg-3 col-md-6">
                    <div className="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div class="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </div>
    )
}

export default PortfolioSection
