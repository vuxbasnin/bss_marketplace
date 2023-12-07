import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchDemo = (payload) => axios.get(`${URL}/demo`, payload);