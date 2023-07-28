import React, { useRef } from "react";
import styles from "./financialaidform.module.css";
import { useState } from "react";
import emailjs from '@emailjs/browser';

function FinancialAidForm() {
  const form = useRef();
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kx3io5q",
        "template_qx4vjz9",
        form.current,
        "KdL5uuDXYYIphgkSG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleCheckboxChange1 = (e) => {
    setIsChecked1(e.target.checked);
  };

  return (
    <section className={styles.wrapper}>
      <h1>Welcome back!</h1>
      <p>Make sure the information you entered is up to date</p>
      <form onSubmit={sendEmail} className={styles.dataForm}>
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
        <label>Reason you applied for aid</label>
        <textarea
          placeholder="100 words minimum"
          name="message"
          cols="30"
          rows="10"
        ></textarea>
        <label>How will your selected course help with your goals?</label>
        <textarea
          placeholder="100 words minimum"
          name="message"
          cols="30"
          rows="10"
        ></textarea>
        <h2>Terms and Conditions</h2>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
          />
          <span>I am sharing accurate information on my application</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={isChecked1}
            onChange={handleCheckboxChange1}
            required
          />
          <span>I commit to finishing my course</span>
        </label>
        <h2>Type the following sentence:</h2>
        <label>I agree to the terms above*</label>
        <input
          className={styles.input}
          type="text"
          placeholder="I agree to the terms above"
          name="user_consent"
          required
        />
        <button className={styles.reviewBtn} type="submit">
          Review
        </button>
      </form>
    </section>
  );
}

export default FinancialAidForm;
