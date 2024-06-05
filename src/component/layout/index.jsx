import Navbar from "../navbar/index.jsx";
import Footer from "../footer/index.jsx";
import {Outlet} from "react-router-dom";

export  const Layout = ()=>{
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}