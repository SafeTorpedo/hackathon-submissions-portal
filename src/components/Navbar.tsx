import React from "react";
import logo from "/logo.png";

const Navbar = () => {
    return (
        <nav className=" bg-white h-16 w-full ">
            <img src={logo} className=" ml-36 mt-3"></img>
        </nav>
    );
};

export default Navbar;
