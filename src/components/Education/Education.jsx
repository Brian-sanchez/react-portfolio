import React from 'react'
import { BiCalendarEvent } from 'react-icons/bi';

import './Education.css';

const Education = () => {
  return (
    <section id='education'>
        <h2>Education</h2>

        <div className='container education__container'>
            <div className='education__content'>
                <div className='education__data'>
                    <div className='info'>
                        <h3>Technician in Web Development and Digital Applications</h3>
                        <small>ISPC - Higher Institute</small>

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

                    <div className='info'>
                        <h3>Bootcamp Full StacK Web Developer</h3>
                        <small>SoyHenry - Bootcamp</small>

                        <div className='education__calendar'>
                            <BiCalendarEvent/>
                            <p>2021 - Present</p>
                        </div>
                    </div>
                </div>

                <div className='education__data'>
                    <div className='info'>
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
  )
}

export default Education