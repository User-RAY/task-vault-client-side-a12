import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../Provider/Auth/AuthContext";
import useUser from "../../Hooks/useUser";
import { BsCoin } from "react-icons/bs";


const Navbar = () => {

    const {user, signout, loading} = useContext(AuthContext);

    const {userInfo} = useUser();

    

    const handleLogout = () => {
        signout()
        .then(() => {
            
            }).catch(() => {
            
            });
    }

    const links1 = <>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    <li><NavLink to='/about'>About Us</NavLink></li>
  </>


const links2 = <>
    <li><NavLink to={userInfo?.role === 'buyer' ? '/dashboard/buyer' : userInfo?.role === 'worker' ? '/dashboard/worker' : userInfo?.role === 'admin' ? '/dashboard/admin' : '/dashboard/worker'}>Dashboard</NavLink></li>
    <li className="self-center"><div>Coin: {userInfo?.coin} <BsCoin className="text-lg text-yellow-600" /></div></li>

</>         
const Profile = <>
        <div className="dropdown dropdown-end tooltip tooltip-right" data-tip={user?.displayName }>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border border-blue-500">
                <img
                    alt="Profile picture"
                    src={user?.photoURL} />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow z-50">
                <li className="text-black"><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </div>
    </>     


    return (
        <div className="shadow-sm sticky top-0 z-30 bg-neutral text-neutral-content">
            <div className="w-11/12 mx-auto">
                <div className="navbar ">
                    <div className="navbar-start flex-1">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                             {
                                loading ? <span className="loading loading-bars loading-md text-blue-500"></span> : user ? links2 : links1
                             }
                        </ul>
                        </div>
                        <NavLink to='/' className="btn btn-ghost text-xl"> <h1 className="">TaskVault</h1></NavLink>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        {
                                loading ? <span className="loading loading-bars loading-md text-blue-500"></span> : user ? links2 : links1
                        }
                        </ul>
                    </div>
                    {
                        loading ? <span className="loading loading-bars loading-md text-blue-500"></span> : user ? Profile : null
                    }
                </div>
            
            </div>
        </div>
    );
};

export default Navbar;