import logo from "/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=" bg-white h-16 w-full ">
            <Link to="/">
                <img src={logo} className=" ml-36 mt-3"></img>
            </Link>
        </nav>
    );
};

export default Navbar;
