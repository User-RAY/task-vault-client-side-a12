import { Navigate, useLocation } from "react-router-dom";
import useUser from "../Hooks/useUser";
import PropTypes from "prop-types";

const BuyerRoute = ({children}) => {
    const {userInfo, userLoading} = useUser();

    const location = useLocation();

    if (userLoading) {
        return <div className='h-[80vh'><div className="flex justify-center items-center h-full"><span className="loading loading-bars loading-lg"></span></div></div>
    }
    

    if(userInfo?.role === 'buyer'){
            return children
    }

    return (
         <Navigate to={location?.state ? location.state : '/'}></Navigate>
    );
};

BuyerRoute.propTypes = {
    children: PropTypes.node,
}

export default BuyerRoute;