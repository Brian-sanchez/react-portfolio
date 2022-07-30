import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import ME from '../../assets/images/me.png';
// import { FaAward } from 'react-icons/fa';
// import { GiGraduateCap } from 'react-icons/gi';

import Aos from "aos";
import "aos/dist/aos.css";

import 'animate.css';

import './about.css';

const About = () => {
  const { i18n, t } = useTranslation(["about"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }

    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id='about' className='animate__animated animate__fadeInUp'>
      <div className='space1'></div>
      <h5 data-aos="fade-up">{t("title1")}</h5>
      <h2 data-aos="fade-up">{t("title2")}</h2>

      <div data-aos="fade-up" className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About-Brian-Sanchez"/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            {
              /*
            <article className='about__card'>
              <FaAward/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article> 
              */
            }
            
            <p>{t("about")}</p>

            <a href='#contact' className='btn btn-primary'>{t("button")}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;