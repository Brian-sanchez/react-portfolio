import React, { useEffect } from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

import Aos from "aos";
import "aos/dist/aos.css";

import './Footer.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='footer' id='footer'>
      <a href='#' className='footer__logo'>BRIAN SANCHEZ</a>

      <ul data-aos="fade-up" className='pageLinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div data-aos="fade-up" className='footer__socials'>
        <a href='https://www.linkedin.com/in/brian-sanchez-2003' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/Brian-sanchez' target='_blank' rel="noreferrer"><BsGithub/></a>
      </div>

      <div data-aos="fade-up" className='footer__copyright'>
        <small>© 2022 Brian Sanchez, All rights reserved</small>
      </div>
    </section>
  );
};

export default Footer;