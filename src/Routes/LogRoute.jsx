import { useContext } from "react";
import AuthContext from "../Provider/Auth/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const LogRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='h-[80vh'><div className="flex justify-center items-center h-full"><span className="loading loading-bars loading-lg"></span></div></div>
    }
    

    if(user){
        return <Navigate to={location?.state ? location.state : '/'}></Navigate>
    }

    return (
        children
    );
};


LogRoute.propTypes = {
    children: PropTypes.node,
}

export default LogRoute;