import { Outlet } from "react-router-dom";
import DashNavbar from "../Components/DashNavbar/DashNavbar";
import DashNavigation from "../Components/DashNavigation/DashNavigation";
import Footer from "../Components/Footer/Footer";



const Dashboard = () => {
    return (
        <div>
            <DashNavbar></DashNavbar>
            <DashNavigation><Outlet></Outlet></DashNavigation>
            <Footer></Footer>

        </div>
    );
};

export default Dashboard;