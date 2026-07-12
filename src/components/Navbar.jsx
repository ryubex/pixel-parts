import { AiOutlineHome } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navBar">
            <div className="navBar-left">
                <h1 className='pixel'>Pixel</h1>
                <h1 className='parts'>Parts</h1>
            </div>

            <div className="navBar-right">
                <ul>
                    <li>
                        <NavLink 
                            to="/"
                            end 
                            className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                            }
                        >
                                <AiOutlineHome />
                                Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/shop" 
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            <BsBoxSeam />
                            Products
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/cart" 
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            <FiShoppingCart />
                            Cart
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to="/login" 
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            <GoPerson />
                            Login
                        </NavLink> 
                    </li>
                </ul>
            </div>
        </nav>
    )
} 