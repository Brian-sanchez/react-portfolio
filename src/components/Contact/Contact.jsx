import React, { useRef, useEffect } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import Aos from "aos";
import "aos/dist/aos.css";

import './Contact.css';

const Contact = () => {
  const { t } = useTranslation(["contact"]);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')

    // Find User ID in "Integration" ----> "API KEYS" 

    emailjs.sendForm('service_r0j08bt', 'template_gqif6ac', form.current, 'LO7ZfoTe-ZFhgrW8y')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
      alert(t("sendAlert"))
  };

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }

    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id='contact'>
        <h5 data-aos="fade-up">{t("title1")}</h5>
        <h2 data-aos="fade-up">{t("title2")}</h2>

      <div className='container contact__container'>
        <div className='contact__options' data-aos="fade-up">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>briansanchezc17@gmail.com</h5>
            <a href='mailto:briansanchezc17@gmail.com' target='_blank' rel='noreferrer'>{t("sendMessage")}</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+54 11 6710-4993</h5>
            <a href='https://api.whatsapp.com/send/?phone=541167104993&text&app_absent=0' target='_blank' rel='noreferrer'>{t("sendMessage")}</a>
          </article>
        </div>

        <form data-aos="fade-up" ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder={`${t("placeholder1")}`} required/>   
          <input type='email' name='email' placeholder={`${t("placeholder2")}`} required/> 
          <textarea name='message' rows='7' placeholder={`${t("placeholder3")}`} required/>
          <button type='submit' className='btn btn-primary'>{t("button")}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;