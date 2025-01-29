import PropTypes from "prop-types";
import { createContext, useState } from "react";

const UserInfoContext = createContext(null);


const UserInfoProvider = ({children}) => {

    const [userinfo, setUserinfo] = useState({});

    const userInfo = {
        userinfo,
        setUserinfo
    }

    return (
        <UserInfoContext.Provider value={userInfo}>
            {children}
        </UserInfoContext.Provider>
    );
};

UserInfoProvider.propTypes = {
    children: PropTypes.node,
}

export  {UserInfoProvider , UserInfoContext};