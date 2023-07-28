import React from 'react';
import styles from './course.module.css';
import { Link } from 'react-router-dom';

function Course({img, title,descr, date, more, id, level}) {
  return (
    <article className={styles.course}>
        <img src={img} alt="" className={styles.img}/>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.info}>{descr}</p>
        <h5 className={styles.level}>Course Level: {level}</h5>
        <p className={styles.date}>Released date: {date}</p>
        <button className={styles.more}><Link to={`/course/${id}`}>Enroll Now</Link></button>
    </article>
  )
}

export default Course;