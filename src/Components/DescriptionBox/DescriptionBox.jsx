import React from 'react'
import'./DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>        </div>
        <div className="descriptionbox-description">
        <p> static text </p>
        <p>static text number two</p>
        </div>
    </div>
  )
}

export default DescriptionBox