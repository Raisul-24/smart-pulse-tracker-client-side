import axios from "axios";

const axiosPublic = axios.create({
   baseURL: 'https://fitness-tracker-server-side.vercel.app'
})

const UseAxiosPublic = () => {
   return axiosPublic
};

export default UseAxiosPublic;