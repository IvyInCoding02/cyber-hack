import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './loginform.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const validationSchema = yup.object().shape({
  email: yup.string().required('This field is required').email('Enter valid email address'),
  password: yup.string().required('This field is required')
})
function LoginPage() {
    const navigate = useNavigate();

    const formik = useFormik({
      initialValues : {
        email: '',
        password: ''
      },
      validationSchema,
      onSubmit: async(userData) => {
        try {
          const { data } = await axios(
            `http://localhost:8080/users?email=${userData.email}`);
            

          console.log(userData)
          if (data.length < 1) {
            console.log("This email does not exist!")
            return
          } 
          localStorage.setItem("token", data.email) 
          navigate("/courses")
          window.locale.relaod();
        } 
        catch {
          toast("Your email address and password do not match.Try again!");
        }
      }
    })

  
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <p>Hi, welcome back!</p>
        <TextField
          label="Email"
          error={Boolean(formik.errors.email)}
          helperText={formik.errors.email && formik.errors.email}
          onBlur={formik.handleBlur}
          variant="filled"
          type="email"
          name="email"
          fullWidth
          required
          style={{ marginBottom: "20px" }}
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <TextField
          label="Password"
          error={Boolean(formik.errors.password)}
          helperText={formik.errors.password && formik.errors.password} 
          onBlur={formik.handleBlur}
          variant="filled"
          type="password"
          name="password"
          fullWidth
          required
          style={{ marginBottom: "40px" }}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button
          type="submit"
          fullWidth
          ariant="contained"
          style={{ background: "blue", color: "white" , fontSize: "16px" }}
        >Login
        </Button>
        <p>Do not have an account? <Link to="/register">Register Now</Link></p>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      
    </section>
  );
}

export default LoginPage;