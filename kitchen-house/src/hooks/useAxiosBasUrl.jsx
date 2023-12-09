import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://kitchen-house-server.vercel.app',
    withCredentials: true,
});

const useAxiosBasUrl = () => {
    return axiosSecure;
};

export default useAxiosBasUrl;
