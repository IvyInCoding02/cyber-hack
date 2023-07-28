import React, { useRef } from 'react';
import styles from './contacts.module.css';
import emailjs from '@emailjs/browser';

function Contacts() {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kx3io5q', 'template_yritf1f', form.current, 'KdL5uuDXYYIphgkSG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
   <section className={styles.wrapper}>
    <h1 className={styles.headTitle}>Get in touch! </h1>
    <form ref={form} onSubmit={sendEmail} className={styles.formMess}>
    <h2 className={styles.title}>Send us a message</h2>
      <input className={styles.input} type="text" placeholder='Full name' name="user_name" required/> 
      <input className={styles.input} type="email" placeholder='Email' name="user_email" required/> 
      <input className={styles.input} type="text" placeholder='Subject' name="subject" required/> 
      <textarea name="message" cols="30" rows="10"></textarea>
      <button className={styles.contactBtn} type="submit">Send message</button>
      <div className={styles.contactInfo}> 
      <p></p>
      </div>
    </form>
   </section>
  )
}

export default Contacts;