import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { BsCart4 } from "react-icons/bs";
import {CgMenuMotion} from 'react-icons/cg'

const Navbar = () => {
  const location = useLocation();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { state } = useCart();

  const [menuState, setMenuState] = useState({
    isDropdownVisible: false,
    openLogout: false,
  });

  const toggleDropdown = () => {
    setMenuState({
      ...menuState,
      isDropdownVisible: !menuState.isDropdownVisible,
    });
  };

  const toggleLogout = () => {
    setMenuState({
      ...menuState,
      openLogout: !menuState.openLogout,
    });
  };

  const handleDropdownClick = () => {
    setMenuState({
      ...menuState,
      isDropdownVisible: !menuState.isDropdownVisible,
    });
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuState({
          ...menuState,
          isDropdownVisible: false,
        });
      }
    };
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, [menuState]);

  return (
    <>
      <header className="w-full bg-slate-700 z-10 sticky top-0 right-0 shadow-md h-[45px]">
        <nav className="max-w-2xl mx-auto px-4">
          <ul className="flex items-center justify-between p-2">
            <div className="flex items-center justify-between">
              <li
                className="text-lg logo-text font-bold cursor-pointer"
                onClick={() => navigate("/")}
              >
                Trendy
              </li>
            </div>

            <li className="md:hidden ml-auto mr-10">
              <NavLink
                to="/cart"
                className={`relative ${location.pathname === "/cart" ? "text-white" : "text-gray-300"}`}
              >
                <BsCart4 className="text-2xl" />
                <span className={`absolute -top-[13px] -right-[15px] text-white font-bold text-md ${state.cartItems.length === 0 && "hidden"}`}>
                  {state.cartItems.length}
                </span>
              </NavLink>
            </li>
            <div className="md:hidden relative" ref={dropdownRef}>
              <CgMenuMotion
              onClick={handleDropdownClick}
              className= 'text-white text-3xl cursor-pointer'
              />
              {menuState.isDropdownVisible && (
                <div className="absolute w-32 bg-slate-700 ring-1 ring-black ring-opacity-5 right-0 top-9 rounded-md shadow-lg my-1">
                  <NavLink
                    to="/"
                    className={`block px-4 py-2 text-white ${location.pathname === "/" ? "bg-gray-600" : ""}`}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/category"
                    className={`block px-4 py-2 text-white ${location.pathname === "/category" ? "bg-gray-600" : ""}`}
                  >
                    Products
                  </NavLink>
                </div>
              )}
            </div>
            <div className="hidden md:flex items-center justify-center flex-grow gap-4">
              <li>
                <NavLink
                  to="/"
                  className={`text-lg font-medium ${location.pathname === "/" ? "text-white" : "text-gray-300"}`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category"
                  className={`text-lg font-medium ${location.pathname === "/category" ? "text-white" : "text-gray-300"}`}
                >
                  Products
                </NavLink>
              </li>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <li>
                <NavLink
                  to="/cart"
                  className={`relative ${location.pathname === "/cart" ? "text-white" : "text-gray-300"}`}
                >
                  <BsCart4 className="text-2xl" />
                  <span className={`absolute -top-[13px] -right-[15px] text-white font-bold text-md ${state.cartItems.length === 0 && "hidden"}`}>
                    {state.cartItems.length}
                  </span>
                </NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
