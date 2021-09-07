import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://mern-blogs-app.herokuapp.com/api/'
})