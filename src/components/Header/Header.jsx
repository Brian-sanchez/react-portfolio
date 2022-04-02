import React from 'react'
import './Header.css'
import CTA from './contactAndCV'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Brian Sanchez</h1>
        <h5 className='text-light'>Full Stack Web Developer</h5>
        
        <CTA/>
        <HeaderSocials/>


        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div> 
    </header>
  )
}

export default Header