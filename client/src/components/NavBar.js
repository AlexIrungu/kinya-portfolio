import { Link } from "react-router-dom";
import React from "react";
import './NavBar.css'


function NavBar() {
    return (
        <nav>
            <div className="bg-black text-white p-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link to='/' className="hover:text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-white">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="hover:text-white">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-white">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
