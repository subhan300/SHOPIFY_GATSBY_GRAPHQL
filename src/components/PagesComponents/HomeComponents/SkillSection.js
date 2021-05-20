import React from "react"
import "./SkillSection.css"

import skill from "../../../assets/all   images/skill.png"
import code from "../../../assets/all   images/code.png"
import wordpress from "../../../assets/all   images/wordpress.png"
import woocommerce from "../../../assets/all   images/woocomarce.png"
import magento from "../../../assets/all   images/Magento.png"

function SkillSection() {
  return (
    <section className="skill_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="skill_images">
              <img src={skill} alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="skill_content">
              <h6>&#60;SKILLS&#62;</h6>
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing minim veniam.
              </h1>

              <div className="progress_bar">
                <p>Code</p>
                <div id="bar1" className="barfiller">
                  <span className="fill" data-percentage="90"></span>
                </div>
              </div>
              <div className="progress_bar">
                <p>Wordpress</p>
                <div id="bar2" className="barfiller">
                  <span className="fill" data-percentage="90"></span>
                </div>
              </div>
              <div className="progress_bar">
                <p>Woocomerce</p>
                <div id="bar3" className="barfiller">
                  <span className="fill" data-percentage="90"></span>
                </div>
              </div>
              <div className="progress_bar">
                <p>Magento</p>
                <div id="bar3" className="barfiller">
                  <span className="fill" data-percentage="90"></span>
                </div>
              </div>

              <ul>
                <li>
                  <a href="#">
                    <img src={code} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={wordpress} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={woocommerce} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={magento} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection
