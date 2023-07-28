import React from 'react';
import styles from './modal.module.css';


const Modal = () => {
    const logOut = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    return(
        <div className={styles.wrapper}>
           <div className={styles.content}>
           <p>My Courses</p>
            <p>My Profile</p>
            <p>MyPurchases</p>
            <p>Accomplishments</p>
            <p onClick={logOut}>Log Out</p>
           </div>
        </div>
    )
   
}

export default Modal;