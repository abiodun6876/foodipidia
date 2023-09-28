import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  FOODIPIDIA_API_URL:import.meta.env.FOODIPIDIA_API_URL,

});


export default axiosClient;