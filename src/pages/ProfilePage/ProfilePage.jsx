import React from 'react';
import styles from './profilepage.module.css'

function ProfilePage() {
  return (
    <section className={styles.wrapper}>
      <h1>Personal Informaiton!</h1>
      <p>Make sure the information you entered is up to date</p>
      <form  className={styles.dataForm}>
        <label>Email</label>
        <input className={styles.input} type="email" name="user_email" required />
        <label>Full name</label>
        <input className={styles.input} type="text" name="user_name" required />
        <label>Education degree</label>
        <input
          className={styles.input}
          type="text"
          name="user_education"
          required
        />
        <label>Annual income</label>
        <input
          className={styles.input}
          type="text"
          placeholder="$"
          name="user_income"
          required
        />
        <label>Employment status</label>
        <input
          className={styles.input}
          type="text"
          name="user_status"
          required
        />
        <button className={styles.reviewBtn} type="submit">
          Enter
        </button>
      </form>
    </section>
  )
}

export default ProfilePage;