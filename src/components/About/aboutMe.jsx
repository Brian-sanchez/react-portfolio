import React from 'react';
import ME from '../../assets/images/me.png';
import { FaAward } from 'react-icons/fa';
import { GiGraduateCap } from 'react-icons/gi';

import './about.css';
import 'animate.css';

const About = () => {
  return (
    <section id='about' className='animate__animated animate__fadeInUp'>
      <div className='space1'></div>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
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
            
            <p>
              My name is Brian Sanchez and I am a self-taught person, enthusiastic, passionate, dedicated and eager to learn new technologies every day for the growth of my training as a professional..
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;