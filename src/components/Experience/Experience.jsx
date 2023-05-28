import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { BiCalendarEvent } from 'react-icons/bi';

import Aos from "aos";
import "aos/dist/aos.css";

import './Experience.css';

const Experience = () => {
    const { i18n, t } = useTranslation(["experience"]);

    useEffect(() => {
        if (localStorage.getItem("i18nextLng")?.length > 2) {
            i18next.changeLanguage("en");
        }

        Aos.init({ duration: 1000 });
    }, []);

    return (
        <section id='experience' className='experience-section'>
            <h5 data-aos="fade-up">{t("title1")}</h5>
            <h2 data-aos="fade-up">{t("title2")}</h2>

            <div className='container experience__container'>
                <div className='experience__content'>
                    <div className='experience__data'>
                        <div></div>

                        <div data-aos="fade-up">
                            <span className='experience__rounder'></span>
                            <span className='experience__line'></span>
                        </div>

                        <div data-aos="fade-up" className='info right_experience'>
                            <h3>{t("experience2")}</h3>
                            <small>{t("experience2-text")}</small>

                            <div className='experience__calendar'>
                                <BiCalendarEvent/>
                                <p>{t("period2")}</p>
                            </div>
                        </div>
                    </div>

                    <div className='experience__data'>
                        <div data-aos="fade-up" className='info'>
                            <h3>{t("experience1")}</h3>
                            <small>{t("experience1-text")}</small>

                            <div className='experience__calendar'>
                                <BiCalendarEvent/>
                                <p>{t("period1")}</p>
                            </div>
                        </div>

                        <div data-aos="fade-up">
                            <span className='experience__rounder'></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;