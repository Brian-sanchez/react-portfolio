import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { BiCalendarEvent } from 'react-icons/bi';

import { experienceData } from '../Data';

import Aos from "aos";
import "aos/dist/aos.css";

import './Experience.css';

const Experience = () => {
    const { t } = useTranslation(["experience"]);

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
                    {
                        experienceData.map((element, index) => {
                            const { id, name, image, page } = element;
                            
                            const expLength = experienceData.length - 1;

                            if (id % 2) {
                                return (
                                    <div className='experience__data' key={id}>
                                        <a href={page} target='_blank' rel="noreferrer" data-aos="fade-up" className='info_experience'>
                                            <img src={image} alt={name} id={name}/>
                                            
                                            <div className='data'>
                                                <h3>{t(`experience${id}`)}</h3>
                                                <small>{name}</small>
                
                                                <div className='experience__calendar'>
                                                    <BiCalendarEvent className='icon'/>
                                                    <p>{t(`period${id}`)}</p>
                                                </div>
                                            </div>
                                        </a>
                                    
                                        <div data-aos="fade-up">
                                            <span className='experience__rounder'></span>
                                            {
                                                index !== expLength && (<span className='experience__line'></span>)
                                            }
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className='experience__data' key={id}>
                                        <div></div>
                
                                        <div data-aos="fade-up">
                                            <span className='experience__rounder'></span>
                                            <span className='experience__line'></span>
                                        </div>
                
                                        <a href={page} target='_blank' rel="noreferrer" data-aos="fade-up" className='info_experience right_experience'>
                                            <div className='data'>
                                                <h3>{t(`experience${id}`)}</h3>
                                                <small>{name}</small>
                
                                                <div className='experience__calendar'>
                                                    <BiCalendarEvent className='icon'/>
                                                    <p>{t(`period${id}`)}</p>
                                                </div>
                                            </div>
                                            
                                            <img src={image} alt={name}/>
                                        </a>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Experience;