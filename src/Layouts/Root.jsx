import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar";

const Root = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    );
};

export default Root;
