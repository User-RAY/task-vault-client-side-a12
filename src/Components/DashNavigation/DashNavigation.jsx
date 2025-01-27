import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";


const DashNavigation = ({children}) => {

    const links1 = <>
    <li><NavLink to='/dashboard/other'>Available Coin</NavLink></li>
    <li><NavLink to='/dashboard/buyer'>Available Coin</NavLink></li>
</>

    return (
        <div className="mt-4 w-11/12 mx-auto">


            <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start">
                {/* Page content here */}

                <label htmlFor="my-drawer-2" className="btn btn-info drawer-button lg:hidden mb-8">
                <RiMenu2Fill />
                Open Navigation Panel
                </label>

                <div className="mt-8 w-[95%] mx-auto">
                    {children}
                    dashh
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
                {/* Sidebar content here */}
                    {
                        links1
                    }
                </ul>
            </div>
            </div>
            
        </div>
    );
};

export default DashNavigation;