import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { DiSass } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiMaterialui } from 'react-icons/si';

import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { SiJava } from 'react-icons/si';
import { SiSpring } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiSequelize } from 'react-icons/si';

import { SiGit } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';

import { BsLightbulbFill } from 'react-icons/bs';
import { RiTeamFill } from 'react-icons/ri';
import { BiTimeFive } from 'react-icons/bi';
import { FaUserTie } from 'react-icons/fa';
import { BiBrain } from 'react-icons/bi';
import { MdComputer } from 'react-icons/md';

import Aos from "aos";
import "aos/dist/aos.css";

import './Skills.css';

const Skills = () => {
  const { i18n, t } = useTranslation(["skills"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
    
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id='skills'>
      <h5 data-aos="fade-up">{t("title1")}</h5>
      <h2 data-aos="fade-up">{t("title2")}</h2>

      <div data-aos="fade-up" className='container skills__container'>
        <div className='skills__frontend'>
          <h3>{t("frontend")}</h3>
          <article className='skills__details'>
            <DiHtml5 className='skills__details-icon'/>
            <h4>HTML</h4>
            <small className='text-light'>{t("advanced")}</small>
          </article>

          <article className='skills__details'>
            <DiJavascript1 className='skills__details-icon'/>
            <h4>JavaScript</h4>
            <small className='text-light'>{t("advanced")}</small>
          </article>

          <article className='skills__details'>
            <DiCss3 className='skills__details-icon'/>
            <h4>CSS</h4>
            <small className='text-light'>{t("advanced")}</small>
          </article>

          <article className='skills__details'>
            <DiSass className='skills__details-icon'/>
            <h4>Sass</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <DiReact className='skills__details-icon'/>
            <h4>React</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <SiRedux className='skills__details-icon'/>
            <h4>Redux</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <SiBootstrap className='skills__details-icon'/>
            <h4>Bootstrap</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <SiTailwindcss className='skills__details-icon'/>
            <h4>Tailwind CSS</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <SiMaterialui className='skills__details-icon'/>
            <h4>Material UI</h4>
            <small className='text-light'>{t("basic")}</small>
          </article>

          <article className='skills__details'>
            <SiTypescript className='skills__details-icon'/>
            <h4>Typescript</h4>
            <small className='text-light'>{t("basic")}</small>
          </article>

          {
            /*
              <article className='skills__details'>
                <SiSequelize className='skills__details-icon'/>
                <h4>Angular</h4>
                <small className='text-light'>Basic</small>
              </article>

                <article className='skills__details'>
                <SiSequelize className='skills__details-icon'/>
                <h4>SQL</h4>
                <small className='text-light'>Basic</small>
              </article>
            */
          }
        </div>

        <div className='skills__backend'>
          <h3>{t("backend")}</h3>
          <article className='skills__details'>
            <DiNodejsSmall className='skills__details-icon'/>
            <h4>Node js</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <SiExpress className='skills__details-icon'/>
            <h4>Express js</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <FaDatabase className='skills__details-icon'/>
            <h4>SQL</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <SiPostgresql className='skills__details-icon'/>
            <h4>PostgreSQL</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <GrMysql className='skills__details-icon'/>
            <h4>MySQL</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <SiJava className='skills__details-icon'/>
            <h4>Java</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <SiSpring className='skills__details-icon'/>
            <h4>Spring Boot</h4>
            <small className='text-light'>{t("basic")}</small>
          </article>

          <article className='skills__details'>
            <SiSequelize className='skills__details-icon'/>
            <h4>Sequelize</h4>
            <small className='text-light'>{t("basic")}</small>
          </article>



          { /* Proximamente...
              <article className='skills__details'>
                <SiSequelize className='skills__details-icon'/>
                <h4>Mongo DB</h4>
                <small className='text-light'>Basic</small>
              </article>

              <article className='skills__details'>
                <SiSequelize className='skills__details-icon'/>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </article>

              <article className='skills__details'>
                <SiSequelize className='skills__details-icon'/>
                <h4>Django</h4>
                <small className='text-light'>Basic</small>
              </article>
            */
          }
        </div>

        <div className='skills__other'>
          <h3>{t("others-skills")}</h3>
          <article className='skills__details'>
            <SiGit className='skills__details-icon'/>
            <h4>Git</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <SiAdobephotoshop className='skills__details-icon'/>
            <h4>Photoshop</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>

          <article className='skills__details'>
            <SiPostman className='skills__details-icon'/>
            <h4>Postman</h4>
            <small className='text-light'>{t("intermediate")}</small>
          </article>
        </div>

        <div className='skills__soft'>
          <h3>{t("soft-skills")}</h3>
          <article className='skills__details'>
            <BsLightbulbFill className='skills__details-icon'/>
            <h4>{t("creative")}</h4>
          </article>

          <article className='skills__details'>
            <RiTeamFill className='skills__details-icon'/>
            <h4>{t("teamworker")}</h4>
          </article>

          <article className='skills__details'>
            <BiTimeFive className='skills__details-icon'/>
            <h4>{t("organized")}</h4>
          </article>

          <article className='skills__details'>
            <FaUserTie className='skills__details-icon'/>
            <h4>{t("responsable")}</h4>
          </article>

          <article className='skills__details'>
            <BiBrain className='skills__details-icon'/>
            <h4>{t("fast-learning")}</h4>
          </article>

          <article className='skills__details'>
            <MdComputer className='skills__details-icon'/>
            <h4>{t("autodidact")}</h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Skills;