import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
<div className='footer'>
    <hr />
    <div className="footer-logo">
    <img src={footer_logo} alt="footer pic" />
        <p>Find Your Shoe PH</p>
    </div>
    <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
    </ul>
    <div className='footer-social-icon'>
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="instagram pic" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="pinterest pic" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="whatsapp pic" />
            </div>
    </div>
    <div className="footer-copyright">
            <hr/> 
            <p>Copyright @ 2023 - All Rights Reserved.</p>
    </div>
</div>

  )
}

export default Footer