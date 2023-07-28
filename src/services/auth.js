import axios from "axios";

export const authServices = () => {
    const registration = (userData) => {
        return axios.post('http://localhost:8080/users', userData)
    }
    const login = (loginData)  => {
        return axios.post
        ('http://localhost:8080/users', loginData);
    }
    return{
        registration,
        login
    }


}