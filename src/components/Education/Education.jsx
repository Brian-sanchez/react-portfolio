import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { BiCalendarEvent } from 'react-icons/bi';

import { educationData } from '../Data';

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
                {
                    educationData.map((element, index) => {
                        const { id, name, image, page, date } = element;
                        
                        const eduLength = educationData.length - 1;

                        if (id % 2) {
                            return (
                                <div className='education__data' key={id}>
                                    <div/>
                
                                    <div data-aos="fade-up">
                                        <span className='education__rounder'/>
                                        {
                                            index !== eduLength && (<span className='education__line'/>)
                                        }
                                    </div>
                
                                    <a href={page} target='_blank' rel="noreferrer" data-aos="fade-up" className='info right_education'>
                                        <div>
                                            <h3>{t(`education${id}`)}</h3>
                                            <small>{t(`education${id}-text`)}</small>
                
                                            <div className='education__calendar'>
                                                <BiCalendarEvent/>
                                                <p>{date}</p>
                                            </div>
                                        </div>
                
                                        <img src={image} alt={name}/>
                                    </a>
                                </div>
                            );
                        } else {
                            return (
                                <div className='education__data' key={id}>
                                    <a href={page} target='_blank' rel="noreferrer" data-aos="fade-up" className='info'>
                                        <img src={image} alt={name}/>

                                        <div>
                                            <h3>{t(`education${id}`)}</h3>
                                            <small>{t(`education${id}-text`)}</small>

                                            <div className='education__calendar'>
                                                <BiCalendarEvent/>
                                                <p>{date}</p>
                                            </div>
                                        </div>
                                    </a>

                                    <div data-aos="fade-up">
                                        <span className='education__rounder'></span>
                                        <span className='education__line'></span>
                                    </div>
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

export default Education;