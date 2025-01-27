import { Outlet } from "react-router-dom";
import DashNavbar from "../Components/DashNavbar/DashNavbar";
import DashNavigation from "../Components/DashNavigation/DashNavigation";



const Dashboard = () => {
    return (
        <div>
            <DashNavbar></DashNavbar>
            <DashNavigation><Outlet></Outlet></DashNavigation>


        </div>
    );
};

export default Dashboard;