import { AiOutlineHome } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

import { Link } from "react-router-dom";
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
                        <Link to="/" className='nav-link'>
                            <AiOutlineHome />
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/shop" className="nav-link">
                            <BsBoxSeam />
                            Products
                        </Link>
                    </li>

                    <li>
                        <Link to="/cart" className="nav-link">
                            <FiShoppingCart />
                            Cart
                        </Link>
                    </li>

                    <li>
                        <Link to="/login" className="nav-link">
                            <GoPerson />
                            Login
                        </Link> 
                    </li>
                </ul>
            </div>
        </nav>
    )
} 