import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import teclab from '../../assets/images/logos/teclab-logo.png';
import ifts from '../../assets/images/logos/IFTS-logo.png';
import soyhenry from '../../assets/images/logos/soyHenry-logo.jpeg';
import instsc from '../../assets/images/logos/santa-catalina-logo.png';

import { BiCalendarEvent } from 'react-icons/bi';

import Aos from "aos";
import "aos/dist/aos.css";

import './Education.css';

const Education = () => {
    const { t } = useTranslation(["education"]);

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }

        Aos.init({ duration: 1000 });
    }, []);
      
  return (
    <section id='education' className='education-section'>
        <h5 data-aos="fade-up">{t("title1")}</h5>
        <h2 data-aos="fade-up">{t("title2")}</h2>

        <div className='container education__container'>
            <div className='education__content'>
                <div className='education__data'>
                    <div></div>

                    <div data-aos="fade-up">
                        <span className='education__rounder'></span>
                        <span className='education__line'></span>
                    </div>

                    <a href='https://teclab.edu.ar' target='_blank' rel="noreferrer" data-aos="fade-up" className='info right_education'>
                        <div>
                           <h3>{t("education4")}</h3>
                            <small>{t("education4-text")}</small>

                            <div className='education__calendar'>
                                <BiCalendarEvent/>
                                <p>2023 - {t("present")}</p>
                            </div> 
                        </div>
                        
                        <img src={teclab} alt='Teclab'/>
                    </a>
                </div>

                <div className='education__data'>
                    <a href='https://www.soyhenry.com' target='_blank' rel="noreferrer" data-aos="fade-up" className='info'>
                        <img src={soyhenry} alt='SoyHenry'/>

                        <div>
                            <h3>{t("education2")}</h3>
                            <small>{t("education2-text")}</small>

                            <div className='education__calendar'>
                                <BiCalendarEvent/>
                                <p>2021 - 2022</p>
                            </div>
                        </div>
                    </a>

                    <div data-aos="fade-up">
                        <span className='education__rounder'></span>
                        <span className='education__line'></span>
                    </div>
                </div>

                <div className='education__data'>
                    <div></div>

                    <div data-aos="fade-up">
                        <span className='education__rounder'></span>
                    </div>

                    <a href='https://www.casasantacatalina.com.ar' target='_blank' rel="noreferrer" data-aos="fade-up" className='info right_education'>
                        <div>
                            <h3>{t("education1")}</h3>
                            <small>{t("education1-text")}</small>

                            <div className='education__calendar'>
                                <BiCalendarEvent/>
                                <p>2016 - 2020</p>
                            </div>
                        </div>

                        <img src={instsc} alt='Instituto Santa Catalina'/>
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Education;