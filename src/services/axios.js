import axiosInstance from 'axios';
import { REACT_APP_API_URL } from './environment';

export default axiosInstance.create({
  baseURL: REACT_APP_API_URL,
});
