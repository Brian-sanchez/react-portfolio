import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { skillsData } from '../Data';

import Aos from "aos";
import "aos/dist/aos.css";

import './Skills.css';

const Skills = () => {
  const { t } = useTranslation(["skills"]);

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
        {
          skillsData.map(({id, name, dataList}) => (
            <div className={`skills_${name}`} key={id}>
              <h3>{t(`${name}`)}</h3>

              {
                dataList.map(({id, name, title, icon, experience}) => (
                  <article className='skills__details' key={id}>
                    {icon}
                    
                    <h4>{name ? name : t(`${title}`)}</h4>
                    
                    {
                      experience && (<small className='text-light'>{t(experience)}</small>)
                    }
                  </article>
                ))
              }
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Skills;