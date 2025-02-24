import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://task-vault-server-side-a12.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;