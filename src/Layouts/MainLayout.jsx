import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-150px)]">
                <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
};

export default MainLayout;