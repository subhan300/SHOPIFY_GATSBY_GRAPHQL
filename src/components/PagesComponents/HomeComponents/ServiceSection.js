import React from "react"
import "./ServiceSection.css"

import service from '../../../assets/all   images/service.png'
import icon from '../../../assets/all   images/icon.png'
import icon1 from '../../../assets/all   images/icon1.png'


function ServiceSection() {
  return (
    <>
      <section className="service_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left_content">
                <h6>&#60;SERVICIOS&#62;</h6>
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing minim
                  veniam.
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div class="service_images">
                <img src={service} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service_item">
        <div className="container">
          <div className="row">
            <div className=" col-lg-3 col-sm-6">
              <div className="item">
                <div className="icon">
                  <img src={icon} alt="" />
                </div>
                <h6>
                  DESARROLLO <br />
                  WEB
                </h6>
              </div>
            </div>
            <div className=" col-lg-3 col-sm-6">
              <div className="item">
                <div className="icon">
                  <img src={icon1} alt="" />
                </div>
                <h6>
                  ECOMMERCE
                  <br />
                  STRATEGY
                </h6>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceSection
