import axios from 'axios';

const getCourses = () =>{
    return axios.get('http://localhost:3030/courses');
}

const getCourse = (id) => {
    return axios.get(`http://localhost:3030/courses/${id}`);
}

export default {
    get: getCourses,
    getCourse:getCourse
}