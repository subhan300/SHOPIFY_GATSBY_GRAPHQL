import React from 'react'
import './TestimonialSection.css'

import signature from '../../../assets/all   images/signature.png'

function TestimonialSection() {
    return (
        <div>
                <section class="testimonial_section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6">
                    <div className="testimonial_caros owl-carousel">
                        <div className="item">
                            <h6>&#60;TESTIMONIOS&#62;</h6>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.”</p>
                            <div className="signature">
                                <img src={signature} alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <h6>&#60;TESTIMONIOS&#62;</h6>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.”</p>
                            <div className="signature">
                                <img src={signature} alt=""/>
                            </div>
                        </div>
                        <div className="item">
                            <h6>&#60;TESTIMONIOS&#62;</h6>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.”</p>
                            <div class="signature">
                                <img src={signature} alt=""/>
                            </div>
                        </div>
                        <div class="item">
                            <h6>&#60;TESTIMONIOS&#62;</h6>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.”</p>
                            <div class="signature">
                                <img src={signature} alt=""/>
                            </div>
                        </div>
                        <div class="item">
                            <h6>&#60;TESTIMONIOS&#62;</h6>
                            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.”</p>
                            <div class="signature">
                                <img src={signature} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="page_wraper"></div>
    </section>

        </div>
    )
}

export default TestimonialSection
