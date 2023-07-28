import React from 'react';
import styles from './ethicalhacking.module.css';

function EthicalHacking() {
  return (
    <div className={styles.wrapper}>
        <div styles={styles.hackInfo}>
        <h1 className={styles.tiitle}>What is Ethical Hacking?</h1>
        <p>Ethical hacking, also known as "white hat" hacking, is the practice of identifying 
            vulnerabilities and weaknesses in computer systems and networks with the owner's permission. 
            It involves using hacking techniques and tools to uncover security flaws and assess the 
            overall security posture. Ethical hackers follow a strict code of conduct and adhere to 
            legal boundaries while performing their assessments. They help organizations identify 
            and mitigate potential security risks before malicious hackers can exploit them.
            Ethical hacking plays a crucial role in strengthening  cybersecurity and 
            safeguarding sensitive information from unauthorized access or misuse.</p>
        </div>
        <img className={styles.hackImg} src="/images/homepage2.jpg" alt="HackImg"/>
    </div>
  )
}

export default EthicalHacking;