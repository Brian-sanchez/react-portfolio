import React, { useRef, useEffect } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

import Aos from "aos";
import "aos/dist/aos.css";

import './Contact.css';

const Contact = () => {
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
      alert("Your message has been sent")
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id='contact'>
      <h5 data-aos="fade-up">Get In Touch</h5>
      <h2 data-aos="fade-up">Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article data-aos="fade-up" className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>contacto@briansanchez.me</h5>
            <a href='mailto:contacto@briansanchez.me' target='_blank' rel='noreferrer'>Send a message</a>
          </article>

          <article data-aos="fade-up" className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+54 11 6710-4993</h5>
            <a href='https://api.whatsapp.com/send/?phone=541167104993&text&app_absent=0' target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>

        <form data-aos="fade-up" ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>   
          <input type='email' name='email' placeholder='Your Email' required/> 
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button data-aos="fade-up" type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;