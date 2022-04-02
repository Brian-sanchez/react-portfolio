import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

import './Footer.css';

const Footer = () => {
  return (
    <section className='footer' id='footer'>
      <a href='#' className='footer__logo'>BRIAN SANCHEZ</a>

      <ul className='pageLinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/brian-sanchez-2003' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Brian-sanchez' target='_blank'><BsGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>© 2022 Brian Sanchez, All rights reserved</small>
      </div>
    </section>
  )
}

export default Footer;