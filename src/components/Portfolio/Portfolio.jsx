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
    description: 'Esta es una pagina web hecha con react, redux, html, css, javascript, etc',
    github: 'https://github.com/Brian-sanchez/Pi-Dogs-Brian-Sanchez',
    demo: ''
  },
  {
    id: 2,
    image: img2,
    title: 'First Portfolio',
    description: 'My first Portfolio',
    github: 'https://github.com/Brian-sanchez/Portfolio',
    demo: 'https://brian-sanchez.github.io/Portfolio/'
  },
  {
    id: 3,
    image: img3,
    title: 'Argentina',
    description: 'A react app ',
    github: '',
    demo: ''
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
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
  )
}

export default Portfolio