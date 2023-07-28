import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
     
      <div className={styles.line}>
      <p className={styles.copyright}>
      © 2023 - WhiteHatHacker Academy | Privacy | Terms
      </p> 
      </div>  
    </footer>
  );
};

export default Footer;