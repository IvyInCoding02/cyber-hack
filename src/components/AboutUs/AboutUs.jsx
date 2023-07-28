import React from 'react';
import styles from './aboutus.module.css';

function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src="/images/homepage3.jpg"
          alt="aboutImg"
        />
        <p className={styles.aboutInfo}>
          Welcome to our platform! We are dedicated to providing basic ethical
          hacking skills and advancing the knowledge of current white hat
          hackers. Our primary focus is on educating the population and internet
          users about data protection and increasing awareness of emerging
          digital and social engineering attacks. Through our online courses, we
          offer comprehensive training in ethical hacking, covering essential
          concepts and techniques.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;