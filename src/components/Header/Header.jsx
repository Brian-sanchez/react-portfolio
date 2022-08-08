import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import CTA from './contactAndCV';
import HeaderSocials from './HeaderSocials';

import './Header.css';
import 'animate.css';

import video from "./video/header.mp4";

const Header = () => {
  const { i18n, t } = useTranslation(["header"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);

  return (
    <>
      <video className="background" muted autoPlay loop src={video} />
      <header>
        <div className='container header__container'>
          <h5>{t("hello")}</h5>
          <h1>Brian Sanchez</h1>
          <h5 className='animate__animated animate__fadeIn'>Full Stack Web Developer</h5>
          
          <CTA/>

          <a href='#footer'>
            <div className='scroll__down'></div>
          </a>
          
          <HeaderSocials/>
        </div>
      </header>
    </>
  );
};

export default Header;