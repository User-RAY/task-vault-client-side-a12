import { useContext } from "react";
import AuthContext from "../Provider/Auth/AuthContext";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useUser = () => {

    const {user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data: userInfo, isPending: userLoading} = useQuery({
        queryKey: [user?.email],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            
            return res.data;
        }
    })
    return { userInfo, userLoading}
};

export default useUser;