import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Provider/Auth/AuthContext";

const axiosSecure = axios.create({
    baseURL:"https://task-vault-server-side-a12.vercel.app"
})

const useAxiosSecure = () => {

    const navigate = useNavigate();
    const {signout, setLoading} = useContext(AuthContext);

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });


    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error?.response?.status;
        if (status === 401 || status === 403) {
            await signout();
            navigate('/login');
            setLoading(false);
        }
        return Promise.reject(error);
    })



    return axiosSecure;
};

export default useAxiosSecure;