import { AiOutlineHome } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <nav className="navBar">
            <div className="navBar-left">
                <h2 className='pixel'>Pixel</h2>
                <h2 className='parts'>Parts</h2>
            </div>

            <div className="navBar-right">
                <ul>
                    <li>
                        <a href="" className='nav-link'>
                            <AiOutlineHome />
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="" className="nav-link">
                            <BsBoxSeam />
                            Products
                        </a>
                    </li>

                    <li>
                        <a href="" className="nav-link">
                            <FiShoppingCart />
                            Cart
                        </a>
                    </li>

                    <li>
                        <a href="" className="nav-link">
                            <GoPerson />
                            Login
                        </a> 
                    </li>
                </ul>
            </div>
        </nav>
    )
} 