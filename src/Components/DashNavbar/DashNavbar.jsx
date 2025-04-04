import { NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { useContext } from "react";
import AuthContext from "../../Provider/Auth/AuthContext";
import useUser from "../../Hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { BsCoin } from "react-icons/bs";


const DashNavbar = () => {

    const {user, signout, loading} = useContext(AuthContext);
    const {userInfo} = useUser();

    const axiosSecure = useAxiosSecure();

    
    const {data: noti = []} = useQuery({
        queryKey: ['noti'], 
        queryFn: async() =>{
            const res = await axiosSecure.get(`/notifications/${userInfo.user_email}`);
            return res.data;
        }
    })


    let len = noti.length;
    

    const handleLogout = () => {
        signout()
        .then(() => {
            
            }).catch(() => {
            
            });
    }



     
const Profile = <>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full border border-blue-500">
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

const links1 = <>
    <li className="pl-3">${userInfo?.coin} Coin</li>

    <li className="pl-3"> {user?.displayName[0].toUpperCase() + user?.displayName.slice(1)} | {userInfo?.role[0].toUpperCase() + userInfo?.role.slice(1)}</li>
</>


const links2 = <div className="grid grid-cols-3 gap-2 items-center">
    <li className="justify-self-end border-r border-black col-span-2"><div className="pr-1"> Coin: {userInfo?.coin}
        <BsCoin className="text-lg text-yellow-600" />
    </div></li>
    <div> {Profile}</div>
    <li className="justify-self-end border-r pr-2 border-black col-span-2">{userInfo?.role[0].toUpperCase() + userInfo?.role.slice(1)} </li>
    <li className="font-bold"> {user?.displayName[0].toUpperCase() + user?.displayName.slice(1)}</li>
</div>    

    return (
        <div className="shadow-sm sticky top-0 z-30 bg-neutral text-neutral-content ">
            <div className="w-11/12 mx-auto">
                <div className="navbar">
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
                                        loading ? <span className="loading loading-bars loading-md text-blue-500"></span> : user ? links1 : links1
                                    }
                                </ul>
                                </div>
                                <NavLink to='/' className="btn btn-ghost text-xl"> <h1 className="">TaskVault</h1></NavLink>
                            </div>
                            <div className="navbar-end">
                                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                                {
                                        loading ? <span className="loading loading-bars loading-md text-blue-500"></span> : user ? links2 : links1
                                }
                                </ul>
            
                                <div className="flex lg:hidden">
                                    {
                                        Profile
                                    }
                                </div>
            
                                <div className="dropdown dropdown-end block">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                        <IoIosNotifications className="text-2xl text-yellow-500" />
                                        <span className="badge badge-sm indicator-item">{len}</span>
                                        </div>
                                    </div>
                                    <div
                                        tabIndex={0}
                                        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                        <div className="card-body max-h-[50vh] overflow-y-scroll">
                                        <span className="text-lg font-bold text-black">{len} notification</span>
                                        <div className="card-actions">
                                            {/* <button className="btn btn-primary btn-block">View notification</button> */}
                                            {
                                                noti.map((msg) => <p className="border-t border-black pt-2 font-medium" key={msg._id}>{msg.message}</p> )
                                            }
                                        </div>
                                        </div>
                                    </div>
                                </div>
            
                            </div>
                </div>
            
            
            </div>
        </div>
                                

    );
};

export default DashNavbar;