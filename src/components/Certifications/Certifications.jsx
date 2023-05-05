import React, { useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import certificate1 from "../../assets/certificates/Certificado Full Stack Web Developer.png";
import certificate2 from "../../assets/certificates/Certificado Full Stack UTN.png";
import certificate3 from "../../assets/certificates/Certificado Front End.png";
import certificate4 from "../../assets/certificates/Certificado Fundamentos Agilidad.png";
import certificate5 from "../../assets/certificates/Git y GitHub.png";
import certificate6 from "../../assets/certificates/Oracle Next Education.png";
import certificate7 from "../../assets/certificates/Certificado SQL.png";
import certificate8 from "../../assets/certificates/Web Design for Web Developers.png";
import certificate9 from "../../assets/certificates/Solving Problems with Software.png";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import Aos from "aos";
import "aos/dist/aos.css";

import "./Certifications.css";

const Certifications = () => {
  const { i18n, t } = useTranslation(["certifications"]);
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
    },
    {
      name: "Certificado Oracle Next Education",
      url: "https://app.aluracursos.com/program/certificate/d3fd56f6-f95f-4c26-98fa-4b547da83833",
      img: certificate6
    },
    {
      name: "Certificado SQL",
      url: "https://www.coursera.org/account/accomplishments/verify/Z9GXK9LH7N4M",
      img: certificate7
    },
    {
      name: "Certificado Web Design for Web Developers",
      url: "https://www.udemy.com/certificate/UC-410ff1d5-e936-4f2c-9459-8a32e7f2017c/",
      img: certificate8
    },
    {
      name: "Certificado Solving Problems with Software",
      url: "https://www.coursera.org/account/accomplishments/verify/HJEFJNYBPXYW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      img: certificate9
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
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }

    //Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id='certifications' className='certifications-section'>
        <h5 data-aos="fade-up">{t("title1")}</h5>
        <h2 data-aos="fade-up">{t("title2")}</h2>

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