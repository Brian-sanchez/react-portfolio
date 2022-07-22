import React, { useEffect } from 'react';

import img1 from '../../assets/images/portfolio1.png';
import img2 from '../../assets/images/portfolio2.png';
import img3 from '../../assets/images/portfolio3.png';
import img4 from '../../assets/images/portfolio4.png';
import img5 from '../../assets/images/portfolio5.png';
import img6 from '../../assets/images/portfolio6.png';
import img7 from '../../assets/images/portfolio7.png';
import img8 from '../../assets/images/portfolio8.png';

import Aos from "aos";
import "aos/dist/aos.css";

import './Portfolio.css';

const data = [
  {
    id: 1,
    image: img7,
    title: 'E-Commerce Wixxer MERN',
    description: "It's about a E-commerce that deals with the sale of services by professionals and specialists. This project was carried out in collaboration with seven other classmates from the SoyHenry bootcamp.",
    github: 'https://github.com/haroldnc/PF-e-commerce',
    demo: 'https://wixxer-haroldnc.vercel.app'
  },
  {
    id: 2,
    image: img8,
    title: 'GCBA COVID-19',
    description: "It's a web design of the GCBA (Gobierno de la Ciudad de Buenos Aires) coronavirus page, made with: HTML and Sass.",
    github: 'https://github.com/Brian-sanchez/gcba-test',
    demo: 'https://gcba-test.vercel.app'
  },
  {
    id: 3,
    image: img5,
    title: 'Pokemon PERN',
    description: "It's about a single page application about pokemon and it was made with: HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, Sequelize and PostreSQL.",
    github: 'https://github.com/Brian-sanchez/pi-pokemon',
    demo: 'https://pi-pokemon-frontend.vercel.app'
  },
  {
    id: 4,
    image: img6,
    title: 'Tech Store PERN',
    description: "It's about a single page application about tech store and it was made with: HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, Sequelize and PostreSQL.",
    github: 'https://github.com/Brian-sanchez/full-stack-test',
    demo: 'https://precious-valkyrie-e1df5b.netlify.app'
  },
  {
    id: 5,
    image: img1,
    title: 'Dogs PERN',
    description: "It's about a single page application about dogs and it was made with: HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, Sequelize and PostreSQL.",
    github: 'https://github.com/Brian-sanchez/Pi-Dogs-Brian-Sanchez',
    demo: 'https://pi-dogs-frontend.vercel.app'
  },
  {
    id: 6,
    image: img4,
    title: 'Countries PERN',
    description: "It's about a single page application about countries and it was made with: HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, Sequelize and PostreSQL.",
    github: 'https://github.com/Brian-sanchez/pi-countries',
    demo: 'https://pi-countries-frontend-87hdhew68-brian-sanchez.vercel.app'
  },
  {
    id: 7,
    image: img3,
    title: 'Argentine national team',
    description: "It's about a team creator with players from the Argentine national team, made with: HTML, CSS, Sass, React, Redux and JavaScript.",
    github: 'https://github.com/Brian-sanchez/seleccion-argentina',
    demo: 'https://brian-sanchez.github.io/seleccion-argentina/'
  },
  {
    id: 8,
    image: img2,
    title: 'First Portfolio',
    description: "It's about a the first version of my web portfolio, made with: HTML, CSS and JavaScript.",
    github: 'https://github.com/Brian-sanchez/Portfolio',
    demo: 'https://brian-sanchez.github.io/Portfolio/'
  }
];

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id='portfolio' className='portfolio__section'>
      <h5 data-aos="fade-up">My Recent Work</h5>
      <h2 data-aos="fade-up">Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article data-aos="fade-up" className='portfolio__item' key={id}>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
      
                <h3>{title}</h3>
                <p>{description}</p>
      
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
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