import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiCodeBlock } from 'react-icons/bi';
import { MdWork } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiCodeBlock/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWork/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav