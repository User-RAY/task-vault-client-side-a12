import { Outlet } from "react-router-dom";
import DashNavbar from "../Components/DashNavbar/DashNavbar";



const Dashboard = () => {
    return (
        <div>
            <DashNavbar>
                
            </DashNavbar>
            <Outlet></Outlet>
            This is dashboard
        </div>
    );
};

export default Dashboard;