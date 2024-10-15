import React, { useEffect } from 'react';

import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { portfolioData } from '../Data';

import Aos from "aos";
import "aos/dist/aos.css";

import './Portfolio.css';

const Portfolio = () => {
  const { t } = useTranslation(["portfolio"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }

    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id='portfolio' className='portfolio__section'>
      <h5 data-aos="fade-up">{t("title1")}</h5>
      <h2 data-aos="fade-up">{t("title2")}</h2>

      <div data-aos="fade-up" className='container portfolio__container'>
        {
          portfolioData.map(({id, image, github, demo}) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className='portfolio__item-image'>
                  <img src={image} alt={t(`portfolio${id}-title`)}/>
                </div>
      
                <h3>{t(`portfolio${id}-title`)}</h3>
                <p>{t(`portfolio${id}-descripcion`)}</p>
      
                <div className='portfolio__item-cta'>
                  { github && (<a href={github} className='btn' target='_blank' rel="noreferrer"><BsGithub/></a>)}
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer"><TbWorld/></a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;