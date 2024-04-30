import React, { useEffect } from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import Aos from "aos";
import "aos/dist/aos.css";

import './Footer.css';

const Footer = () => {
  const { t } = useTranslation(["footer"]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section data-aos="fade-up" className='footer' id='footer'>
      <button className='footer__logo' onClick={handleScrollToTop}>BRIAN SANCHEZ</button>

      <ul data-aos="fade-up" className='pageLinks'>
        <li><button onClick={handleScrollToTop}>{t("menu1")}</button></li>
        <li><a href='#about'>{t("menu2")}</a></li>
        <li><a href='#education'>{t("menu3")}</a></li>
        <li><a href='#certifications'>{t("menu4")}</a></li>
        <li><a href='#skills'>{t("menu5")}</a></li>
        <li><a href='#portfolio'>{t("menu6")}</a></li>
        <li><a href='#contact'>{t("menu7")}</a></li>
      </ul>

      <div data-aos="fade-up" className='footer__socials'>
        <a href='https://www.linkedin.com/in/brian-sanchez-2003' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/Brian-sanchez' target='_blank' rel="noreferrer"><BsGithub/></a>
      </div>

      <div data-aos="fade-up" className='footer__copyright'>
        <small>{t("copyright")}</small>
      </div>
    </section>
  );
};

export default Footer;