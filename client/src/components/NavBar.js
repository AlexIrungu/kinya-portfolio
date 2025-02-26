import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="hidden md:flex space-x-6">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/blog", label: "Blog" },
            { to: "/contact", label: "Contact" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-white focus:outline-none text-2xl">
          &#9776;
        </button>
      </div>
    </nav>
  );
}

export default NavBar;