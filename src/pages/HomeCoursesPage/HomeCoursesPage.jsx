import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Course from '../../components/Course/Course';
import courseServices from '../../services/courses';
import styles from './homecoursespage.module.css';
import ReactPaginate from 'react-paginate';

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [courseOffset, setCourseOffset] = useState(0);
  const [forcePage, setForcePage] = useState(0);

  const coursesPerPage = 6;
  const endOffset = courseOffset + coursesPerPage;
  console.log(`Loading items from ${courseOffset} to ${endOffset}`);
  const currentCourses = courses.slice(courseOffset, endOffset); // products.slice(0,4) => [0,1,2,4]
  const pageCount = Math.ceil(courses.length / coursesPerPage); //Amount of pages

  const handlePageClick = (event) => {
    const newOffset = event.selected * coursesPerPage;
    setCourseOffset(newOffset);
    setForcePage(event.selected)
  };

  useEffect(() =>{
    courseServices
    .get()
    .then(res => setCourses(res.data))
  }, [])

  return (
  <div>
    <h1 className={styles.title}>Ethical Hacking Courses</h1>
    <div className={styles.coursesWrapper}>
        {currentCourses.map(course => {
          return <Course
          key={course.id}
          title={course.title}
          descr={course.descr}
          img={course.picture}
          more={course.more}
          date={course.date}
          price={course.price}
          level={course.level}
          id={course.id}
          /> 
        })}
    </div>
    <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName={styles["pagination-wrapper"]}
        pageLinkClassName={styles["pagination-page"]}
        nextClassName={styles["pagination-next"]}
        activeLinkClassName={styles["pagination-active"]}
        forcePage={forcePage}
      />
  </div>
  )
}

export default CoursesPage;