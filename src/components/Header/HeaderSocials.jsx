import React, { useState } from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineTranslate } from 'react-icons/hi';

import { useTranslation } from 'react-i18next';

const HeaderSocials = () => {
  const { t, i18n } = useTranslation();
  const [Lenguage, setLenguage] = useState(false);

  const handleClick = () => {
    setLenguage(!Lenguage);

    if (Lenguage === false) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  };
  
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/brian-sanchez-2003' target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/Brian-sanchez' target='_blank' rel='noreferrer'><BsGithub/></a>
        <HiOutlineTranslate className='translate' onClick={() => handleClick()}/>
    </div>
  );
};

export default HeaderSocials;