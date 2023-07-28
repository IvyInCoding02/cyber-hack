import React, { useState } from 'react';
import styles from './paymentpage.module.css'
import { useSelector } from 'react-redux';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect } from 'react';
import axios from 'axios';

const cardStyle = {
  style: {
    base: {
      color:"black",
      fontSize: "24px",
      "::placeholder" : {
        color: "black"
      }
    }
  }
}

const PaymentForm = () => {
  // const sum = useSelector(state => state.cart.sum);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  const [sum, setSum] = useState(0);

  useEffect(() => {
    axios.post('https://whispering-river-87788.herokuapp.com/api/create-payment-intent')
    .then(res => setClientSecret(res.data.clientSecret))
  }, [])


  const pay =(e) => {
    e.preventDefault()
    stripe.confirmCardPayment(clientSecret, {
      payment_method : {
        card: elements.getElement(CardElement)
      }})
      .then(res => console.log(res))
  }
    return (
      <>
      {/* <h1>Сумма оплаты: {sum}</h1> */}
      <div className={styles.wrapper}>
      <form className={styles.card} onSubmit={pay}>
        <div>
          <CardElement options={cardStyle}/>
        </div>
        <button type="submit" >Pay</button>
      </form>
      {/* <div className={styles["product-wrapper"]}>
        <p className={styles["product-title"]}> Product  <span>Subtotal</span> </p>
        <p className={styles["product-name"]}>  Asgaard sofa  <span>Rs. 250000</span> </p>
        <p className={styles["product-subtotal"]}>  Asgaard sofa  <span>Rs. 250000</span> </p>
        <p className={styles["product-total"]}> Total  <span>Rs. 250000</span> </p>
      </div> */}
      </div>
      </>
    );
};

export default PaymentForm;