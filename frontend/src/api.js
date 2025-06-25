import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const submitFeedback = (data) => API.post('/feedback', data);
export const getFeedback = () => API.get('/feedback');
