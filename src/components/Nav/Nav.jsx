import React from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BiCodeBlock } from 'react-icons/bi';
import { TbCertificate } from 'react-icons/tb';
import { MdWork } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { BsFillGearFill } from 'react-icons/bs';

import { useState } from 'react';

import './Nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href='#education' id='edu' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><BiBook/></a>
      <a href='#certifications' id='cer' onClick={() => setActiveNav('#certifications')} className={activeNav === '#certifications' ? 'active' : ''}><TbCertificate/></a>
      <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BsFillGearFill/></a>
      <a href='#portfolio' id='por' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiCodeBlock/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  );
};

export default Nav;