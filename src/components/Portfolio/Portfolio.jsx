import React, { useEffect } from 'react';

import img1 from '../../assets/images/portfolio1.png';
import img2 from '../../assets/images/portfolio2.png';
import img3 from '../../assets/images/portfolio3.png';
import img4 from '../../assets/images/portfolio4.png';
import img5 from '../../assets/images/portfolio5.png';
import img6 from '../../assets/images/portfolio6.png';
import img7 from '../../assets/images/portfolio7.png';
import img8 from '../../assets/images/portfolio8.png';
import img9 from '../../assets/images/portfolio9.png';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import Aos from "aos";
import "aos/dist/aos.css";

import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';

import './Portfolio.css';

const Portfolio = () => {
  const { t } = useTranslation(["portfolio"]);

  const data = [
    {
      id: 1,
      image: img9,
      title: `${t("portfolio9-title")}`,
      description: `${t("portfolio9-descripcion")}`,
      github: 'https://github.com/Brian-sanchez/biblioteca-java',
      demo: 'https://biblioteca-java-deploy.vercel.app'
    },
    {
      id: 2,
      image: img7,
      title: `${t("portfolio8-title")}`,
      description: `${t("portfolio8-descripcion")}`,
      github: 'https://github.com/haroldnc/PF-e-commerce',
      demo: 'https://wixxer-haroldnc.vercel.app'
    },
    {
      id: 3,
      image: img8,
      title: `${t("portfolio7-title")}`,
      description: `${t("portfolio7-descripcion")}`,
      github: 'https://github.com/Brian-sanchez/gcba-test',
      demo: 'https://gcba-test.vercel.app'
    },
    {
      id: 4,
      image: img5,
      title: `${t("portfolio6-title")}`,
      description: `${t("portfolio6-descripcion")}`,
      github: 'https://github.com/Brian-sanchez/pi-pokemon',
      demo: 'https://pi-pokemon-frontend.vercel.app'
    },
    {
      id: 5,
      image: img6,
      title: `${t("portfolio5-title")}`,
      description: `${t("portfolio5-descripcion")}`,
      github: 'https://github.com/Brian-sanchez/full-stack-test',
      demo: 'https://precious-valkyrie-e1df5b.netlify.app'
    },
    {
      id: 6,
      image: img1,
      title: `${t("portfolio4-title")}`,
      description: `${t("portfolio4-descripcion")}`,
      github: 'https://github.com/Brian-sanchez/Pi-Dogs-Brian-Sanchez',
      demo: 'https://pi-dogs-frontend.vercel.app'
    },
    {
      id: 7,
      image: img4,
      title: `${t("portfolio3-title")}`,
      description: `${t("portfolio3-descripcion")}`,
      github: 'https://github.com/Brian-sanchez/pi-countries',
      demo: 'https://pi-countries-frontend-87hdhew68-brian-sanchez.vercel.app'
    },
    {
      id: 8,
      image: img3,
      title: `${t("portfolio2-title")}`,
      description: `${t("portfolio2-descripcion")}`,
      github: 'https://github.com/Brian-sanchez/seleccion-argentina',
      demo: 'https://brian-sanchez.github.io/seleccion-argentina/'
    },
    {
      id: 9,
      image: img2,
      title: `${t("portfolio1-title")}`,
      description: `${t("portfolio1-descripcion")}`,
      github: 'https://github.com/Brian-sanchez/Portfolio',
      demo: 'https://brian-sanchez.github.io/Portfolio/'
    }
  ];

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
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article className='portfolio__item' key={id}>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
      
                <h3>{title}</h3>
                <p>{description}</p>
      
                <div className='portfolio__item-cta'>
                  {
                    /* !github ? console.log("no tiene github") : console.log("si tiene github") */
                  }
                  <a href={github} className='btn' target='_blank' rel="noreferrer"> <BsGithub/> </a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer"> <TbWorld/> </a>
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