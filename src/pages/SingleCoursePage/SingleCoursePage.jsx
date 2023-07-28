import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ProductServices from '../../services/courses';
import styles from './singlecoursepage.module.css'
import FinancialAidForm from '../../components/FinancialAidForm/FinancialAidForm';

function SingleCoursePage() {
    const [course, setCourse] = useState({});
    const { id } = useParams();

    useEffect(() => {
        ProductServices
        .getCourse(id)
        .then(res => {
            setCourse(res.data)
        })
    }, [])

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h1 className={styles.title}>{course.title}</h1>
          <img src={course.picture} alt=""/>
          <p className={styles.descr}>{course.descr}</p>
          <p className={styles.date}>{course.date}</p>
          <h2 className={styles.price}>Course price: {course.price}</h2>
          <div className={styles.courseBtn}>
            <Link to={'/enroll'}><button>Enroll Now</button></Link>
            <Link to={'/financial-aid'}><button>Financial Aid</button></Link>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCoursePage;