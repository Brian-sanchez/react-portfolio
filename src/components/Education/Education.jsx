import React, { useEffect } from 'react';
import { BiCalendarEvent } from 'react-icons/bi';

import Aos from "aos";
import "aos/dist/aos.css";

import './Education.css';

const Education = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
      
  return (
    <section id='education' className='education-section'>
        <h2 data-aos="fade-up">Education</h2>

        <div className='container education__container'>
            <div className='education__content'>
                <div className='education__data'>
                    <div data-aos="fade-up" className='info'>
                        <h3>Systems Analyst Technician</h3>
                        <small>IFTS N°11 - Higher Institute</small>

                        <div className='education__calendar'>
                            <BiCalendarEvent/>
                            <p>2022 - Present</p>
                        </div>
                    </div>

                    <div>
                        <span className='education__rounder'></span>
                        <span className='education__line'></span>
                    </div>
                </div>

                <div className='education__data'>
                    <div></div>

                    <div>
                        <span className='education__rounder'></span>
                        <span className='education__line'></span>
                    </div>

                    <div data-aos="fade-up" className='info'>
                        <h3>Bootcamp Full StacK Web Developer</h3>
                        <small>SoyHenry - Bootcamp</small>

                        <div className='education__calendar'>
                            <BiCalendarEvent/>
                            <p>2021 - 2022</p>
                        </div>
                    </div>
                </div>

                <div className='education__data'>
                    <div data-aos="fade-up" className='info'>
                        <h3>High school graduate</h3>
                        <small>Instituto Santa Catalina de Alejandria - High School</small>

                        <div className='education__calendar'>
                            <BiCalendarEvent/>
                            <p>2016 - 2020</p>
                        </div>
                    </div>

                    <div>
                        <span className='education__rounder'></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Education;