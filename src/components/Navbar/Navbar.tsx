import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">MyStore</div>
                <div className="space-x-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-300" : "text-white"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-300" : "text-white"
                        }
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            isActive ? "text-yellow-300" : "text-white"
                        }
                    >
                        Cart
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
