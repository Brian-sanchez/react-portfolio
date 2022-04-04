import React from 'react';
import CTA from './contactAndCV';
import HeaderSocials from './HeaderSocials';

import './Header.css';
import 'animate.css';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Brian Sanchez</h1>
        <h5 className='animate__animated animate__fadeIn'>Full Stack Web Developer</h5>
        
        <CTA/>
        <HeaderSocials/>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div> 
    </header>
  )
}

export default Header