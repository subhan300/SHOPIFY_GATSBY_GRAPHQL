import React from 'react'
import './BlogandContact.css'


import blogShape from '../../../assets/all   images/blog-shape.png'
import BlogSlider from '../../../assets/all   images/blog-slider.jpg'
import {Link} from "gatsby"
function BlogandContact({BlogData}) {
    let data=BlogData.filter(city =>city.featuredblogs==true)

    
   
    return (
        <div>
                <section className="blog-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="blog_left">
                        <h6>&#60;BLOG&#62;</h6>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing  minim veniam.</h1>
                        <div className="blog_shape">
                            <img src={blogShape} alt=""/>
                        </div>
                        <div className="contact_section">
                            <div className="contact_left">
                                <h6>&#60;CONTACTO&#62;</h6>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing minim veniam.</h2>
                                <div className="row">
                                    <div class="col-sm-6">
                                        <h4>GENERAL</h4>
                                        <a href="">info@dominio.com</a>
                                        <a href="">0033 2313 312 443</a>
                                    </div>
                                    <div className="col-sm-6">
                                        <h4>OFICINA</h4>
                                        <p>459 Brodway <br/> New York, NY 1233</p>
                                        <p href="">(312) 323-4355</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="blog_right">
                        <div className="slider_area owl-carousel">
                          
                                    {data.map(val => {
                                        const Images_trim = val.images[0].file.url
                                        const image = Images_trim.replace('//', 'https://').trim()

                                        const description = val.childContentfulReactjsVsAngularDesarticleTextNode
                                      

                                        return (

                                                  


                                                       
                                            <div className="item">
                                                <img src={image} alt="" />
                                                <p>{val.shortDescription.shortDescription}</p>
                                                <Link to={`http://localhost:8000/Blogs/${val.slug}`}> <div className="text-center py-3"><button type="button" class="btn btn-warning ">Read More</button></div></Link>
                             
                                            </div>
                                          
                                              


                                        )
                                    })}
                        
                          
                        </div>
                        <div className="slider_content">
                            <h4>4/OCT/2020</h4>
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                            <Link  class="theme_btn" to="http://localhost:8000/Blog/">Read ALL </Link>
                        </div>
                    </div>

                    <div className="contact_section">
                        <form className="contact_form" >
                            <div className="input_group">
                                <input className="form-control " type="text" placeholder="first Name"/>
                                <input className="form-control " type="text" placeholder="last Name"/>
                            </div>
                            <input className="form-control" type="text" placeholder="Your Subject"/>
                            <input className="form-control" type="text" placeholder="Your E-mail"/>
                            <textarea name=""></textarea>
                            <button className="theme_btn" type="button">ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </div>
    )
}

export default BlogandContact
