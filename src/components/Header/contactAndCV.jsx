import React from 'react';
import CV from '../../assets/documents/Brian Sanchez CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="Brian-Sanchez-CV" className='btn'>Dowload CV</a>
        <a href='#contact' className='btn'>Let's Talk</a>
    </div>
  );
};

export default CTA;