import React from 'react';

import img1 from '../../assets/images/portfolio1.png';
import img2 from '../../assets/images/portfolio2.png';
import img3 from '../../assets/images/portfolio3.png';

import './Portfolio.css';

const data = [
  {
    id: 1,
    image: img1,
    title: 'SPA Dog',
    description: "It's about a single page application about dogs and it was made with: HTML, CSS, JavaScript, React, Redux, Node.js, Express.js, Sequelize and PostreSQL.",
    github: 'https://github.com/Brian-sanchez/Pi-Dogs-Brian-Sanchez',
    demo: 'https://youtu.be/wPCTq3NS7eU'
  },
  {
    id: 2,
    image: img2,
    title: 'First Portfolio',
    description: "It's about a the first version of my web portfolio, made with: HTML, CSS and JavaScript.",
    github: 'https://github.com/Brian-sanchez/Portfolio',
    demo: 'https://brian-sanchez.github.io/Portfolio/'
  },
  {
    id: 3,
    image: img3,
    title: 'Argentine national team',
    description: "It's about a team creator with players from the Argentine national team, made with: HTML, CSS, Sass, React, Redux and JavaScript..",
    github: 'https://github.com/Brian-sanchez/seleccion-argentina',
    demo: 'https://brian-sanchez.github.io/seleccion-argentina/'
  },
  {
    id: 4,
    image: img3,
    title: 'SPA Countries',
    description: "It's about a team creator with players from the Argentine national team, made with: HTML, CSS, Sass, React, Redux and JavaScript..",
    github: 'https://github.com/Brian-sanchez/seleccion-argentina',
    demo: 'https://pi-countries-frontend-87hdhew68-brian-sanchez.vercel.app'
  },
  {
    id: 5,
    image: img3,
    title: 'SPA Pokemon',
    description: "It's about a team creator with players from the Argentine national team, made with: HTML, CSS, Sass, React, Redux and JavaScript..",
    github: 'https://github.com/Brian-sanchez/seleccion-argentina',
    demo: 'https://brian-sanchez.github.io/seleccion-argentina/'
  },
  {
    id: 6,
    image: img3,
    title: 'Tech Store',
    description: "It's about a team creator with players from the Argentine national team, made with: HTML, CSS, Sass, React, Redux and JavaScript..",
    github: 'https://github.com/Brian-sanchez/seleccion-argentina',
    demo: 'https://precious-valkyrie-e1df5b.netlify.app'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio__section'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
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
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
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