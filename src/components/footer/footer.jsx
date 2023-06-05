import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href='#root' className='footer__logo'>MBUNGAI</a>
      <ul className="permalinks">
        <li><a href='#root'>Home</a></li>
        <li><a href='#about'>about</a></li>
        <li><a href='#experience'>experience</a></li>
        <li><a href='#services'>services</a></li>
        <li><a href='#portfolio'>portfolio</a></li>
        <li><a href='#testimonials'>testimonials</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>
      <div className="footer__socials">
      </div>
      <a href='https://facebook.com'><FaFacebookF/></a>
      <a href='https://instagram.com'><FiInstagram/></a>
      <a href='https://twitter.com'><IoLogoTwitter/></a>
      


    </footer>
  )
}

export default footer