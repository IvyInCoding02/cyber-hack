import React from 'react';
import styles from './registerform.module.css';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import { authServices } from '../../services/auth'
import { useNavigate } from 'react-router-dom';


function RegisterForm() {
 const navigate = useNavigate();
 const { registration} = authServices();
 const validationSchema = yup.object().shape({
   email: yup
     .string()
     .required("This field is required*")
     .email("Enter a valid email address"),
   username: yup.string().required("This field is required"),
   password: yup.string().required("This field is required"),
 });

  const formik = useFormik({
    initialValues : {
      email : "",
      username : "",
      password: ""
    },
    validationSchema,
     onSubmit: async (values) => {
     try {
      const data = await registration(values)
      console.log(data.data)
      localStorage.setItem("token", data.email)
      navigate("/courses")
     } catch(err) {
      console.log(err.response)
      toast("This user already exists. Log in!")
     }
    }
  })

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Register</h1>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <TextField
          error={formik.errors.email}
          helperText={formik.errors.email ? formik.errors.email : ""}
          onBlur={formik.handleBlur}
          label="
          Email"
          variant="filled"
          type="email"
          name="email"
          fullWidth
          style={{ marginBottom: "20px" }}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <TextField
          error={formik.errors.email}
          helperText={formik.errors.email ? formik.errors.email : ""}
          onBlur={formik.handleBlur}
          label="Full Name"
          variant="filled"
          type="text"
          name="username"
          fullWidth
          style={{ marginBottom: "20px" }}
          value={formik.values.username}
          onChange={formik.handleChange}
        />
         <TextField
          error={formik.errors.email}
          helperText={formik.errors.email ? formik.errors.email : ""}
          onBlur={formik.handleBlur}
          label="Password"
          variant="filled"
          type="password"
          name="password"
          fullWidth
          required
          style={{ marginBottom: "20px" }}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button type="submit" variant="contained">Sign up</Button>
        <ToastContainer />
      </form>
    </section>
  );
}

export default RegisterForm;

