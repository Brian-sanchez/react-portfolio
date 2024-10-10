import React, { useEffect } from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { certificationData } from '../Data';

import Aos from "aos";
import "aos/dist/aos.css";

import "./Certifications.css";

const Certifications = () => {
  const { t } = useTranslation(["certifications"]);
  
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

    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id='certifications' className='certifications-section'>
        <h5 data-aos="fade-up">{t("title1")}</h5>
        <h2 data-aos="fade-up">{t("title2")}</h2>

        <div data-aos="fade-up" className='container certifications_container'>
            <Slider {...settings} className="certifications_slider">
              {
                certificationData.map((element, index) => (
                  <div key={index} className="certifications">
                    <a href={element.url} target="_blank" rel="noreferrer"><img src={element.img} alt={element.name} className="certifications_images"/></a>
                  </div>
                ))
              }
            </Slider>
        </div>
    </section>
  );
};

export default Certifications;