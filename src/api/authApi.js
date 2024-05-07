import axios from 'axios';

const BASE_URL = 'https://backend-login-uce-e402d2da0672.herokuapp.com/api';


export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data.message; // Lanzar solo el mensaje de error
    }
};
