import React from 'react'
import '../../PagesComponents/BlogComponents/BlogSliderCard.css'

function BlogSliderCard({avatar}) {
    return (
        <div className="slider__wrapperCont">
            <img src={avatar} className="avatar__card"/>
            <p>4/</p>
            <h2>Lorem Ipsum</h2>
            <span>LEER MAS</span>            
        </div>
    )
}

export default BlogSliderCard
