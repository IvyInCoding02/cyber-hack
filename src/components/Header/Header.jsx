import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../redux/courseSlice';
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';

function Header() {
  const [visible, setVisible] = useState(false);
  const [loginState, setLoginState] = useState(false);
  

  useEffect(() => {
    const authData = localStorage.getItem("token")
    if(authData){
      setLoginState(authData)

    }
  }, [])

  const handleClick = () =>{
    setVisible(!visible)
  }
  return (
    <>
      <header>
        <div className={styles.wrapper}>
            <div>
            <img src="/images/whiteHatHacker.jpg" alt="logo" className={styles.logo}/>
            </div>
          <nav className={styles.nav}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/courses'>Courses</NavLink>
            <NavLink to='/profile'>MyProfile</NavLink>
            <NavLink to='/aboutUs'>AboutUs</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
          </nav>
          <div className={styles.icons}>
            {/* <div className={styles.searchForm}>
            <input type="text" placeholder="Search here..." className={styles.searchInput}/>
            <img src='/images/Search.png' alt="search" className={styles.icon}/>
            </div> */}
            
            <img src='/images/Moon_alt_duotone.png' alt="moon" className={styles.icon}/>
            <img src='/images/Sun_duotone.png' alt="sun" className={styles.icon}/>
            {/* <img onClick={handleClick} src='/images/User_cicrle_light.png' alt="profile" className={styles.icon}/> */}
            <div className={styles.auth}>
              {loginState ? <img onClick={handleClick} src='/images/User_cicrle_light.png' alt="profile" className={styles.icon}/> :
               <> <Link className={styles.authText} to="/register">Sign Up</Link>
               <Link className={styles.authText} to="/login">Log In</Link></>}
            </div>
          </div>
          {visible && <Modal/>}
        </div>
        <div className={styles.line}></div>
      </header>
    </>
  );
}

export default Header;