import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SingleCoursePage from './pages/SingleCoursePage/SingleCoursePage';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import FinancialAidForm from './components/FinancialAidForm/FinancialAidForm';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CoursesPage from './pages/CoursesPage/CoursesPage';


 function MyRoutes() {
  return (
    <Routes>
        <Route path={'/'} element={ <HomePage/>}/>
        <Route path={'/course/:id'} element={<SingleCoursePage/>}/>
        <Route path={'/enroll'} element={<PaymentPage/>}/>
        <Route path={'/login'} element={<LoginForm/>}/>
        <Route path={'/register'} element={<RegisterForm/>}/>
        <Route path={'/aboutUs'} element={<AboutUs/>}/>
        <Route path={'/contacts'} element={<Contacts/>}/>   
        <Route path={'/financial-aid'} element={<FinancialAidForm/>}/>   
        <Route path={'/profile'} element={<ProfilePage/>}/> 
        <Route path={'/courses'} element={<CoursesPage/>}/>  
    </Routes>
  )
}
export default MyRoutes;
