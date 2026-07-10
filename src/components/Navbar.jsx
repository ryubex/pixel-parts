import { AiOutlineHome } from "react-icons/ai";
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
                        <a href="" className='nav-link'></a>
                        <AiOutlineHome />
                        Home
                    </li>

                    <li>
                        Products
                    </li>

                    <li>
                        Cart
                    </li>

                    <li>
                        Login
                    </li>
                </ul>
            </div>
        </nav>
    )
} 