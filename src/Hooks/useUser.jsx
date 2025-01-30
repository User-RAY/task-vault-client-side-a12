import { useContext } from "react";
import AuthContext from "../Provider/Auth/AuthContext";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useUser = () => {

    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const token = localStorage.getItem('access-token')

    const {data: userInfo, isPending: userLoading} = useQuery({
        queryKey: [user?.email],
  
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            
            return res.data;
        },
        enabled: !!token,
    })
    return { userInfo, userLoading}
};

export default useUser;