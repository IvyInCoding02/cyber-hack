import React from 'react';
import styles from './homepage.module.css';
import AboutUs from '../../components/AboutUs/AboutUs';
import Contacts from '../../components/Contacts/Contacts';
import Quote from '../../components/Quote/Quote';
import HomeCoursesPage from '../HomeCoursesPage/HomeCoursesPage';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';


function HomePage() {
  return (
    <div className={styles.content}> 
      <Breadcrumbs/>  
      <HomeCoursesPage/>
      <AboutUs/>
      <Contacts/>
      {/* <Quote/> */}
      
    </div>
  );
}




export default HomePage;