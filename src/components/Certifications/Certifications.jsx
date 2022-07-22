import React, { useEffect } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import certificate1 from "../../assets/certificates/Certificado Full Stack Web Developer.png";
import certificate2 from "../../assets/certificates/Certificado Full Stack UTN.png";
import certificate3 from "../../assets/certificates/Certificado Front End.png";
import certificate4 from "../../assets/certificates/Certificado Fundamentos Agilidad.png";
import certificate5 from "../../assets/certificates/Git y GitHub.png";

import Aos from "aos";
import "aos/dist/aos.css";

import "./Certifications.css";

const Certifications = () => {
  const certificates = [
    {
      name: "Certificado Full Stack Web Developer SoyHenry",
      url: "https://certificates.soyhenry.com/cert?id=e2153b0c-3749-4faa-9931-d006c9ea5fcc",
      img: certificate1
    },
    {
      name: "Certificado Full Stack UTN e-learning",
      url: "https://drive.google.com/file/d/1C9_B9pq1KgWJgjUOJN8qRVH-GjVEWMxf/view",
      img: certificate2
    },
    {
      name: "Certificado Front End Oracle Next Education",
      url: "https://app.aluracursos.com/degree/certificate/c8082d46-8c5c-4281-a659-e2b88d317113",
      img: certificate3
    },
    {
      name: "Certificado Fundamentos de Agilidad Oracle Next Education",
      url: "https://app.aluracursos.com/certificate/b2c272ac-6f42-4829-baf4-8b566ebf3b6c",
      img: certificate4
    },
    {
      name: "Certificado Git y GitHub Oracle Next Education",
      url: "https://app.aluracursos.com/certificate/699f7e52-9406-4799-8460-740a47721c4e",
      img: certificate5
    }
  ]
  
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,   
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id='certifications' className='certifications-section'>
        <h2 data-aos="fade-up">Certifications</h2>

        <div data-aos="fade-up" className='container certifications_container'>
            <Slider {...settings} className="certifications_slider">
              {
                certificates && certificates.map(c => (
                  <div key={c.name} className="certifications">
                    <a href={c.url} target="_blank" rel="noreferrer"><img src={c.img} alt={c.name} className="certifications_images"/></a>
                  </div>
                ))
              }
            </Slider>
        </div>
    </section>
  );
};

export default Certifications;