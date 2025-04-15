import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/images/sidebar/navlogo.svg";
import logo1 from "../assets/images/sidebar/home.svg";
import logo2 from "../assets/images/sidebar/clock.svg";
import logo3 from "../assets/images/sidebar/folder.svg";
import logo4 from "../assets/images/sidebar/settings.svg";
import plane from "../assets/images/sidebar/plane.svg";
import { Button } from './Button';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { IoIosLogOut } from 'react-icons/io';

export default function Sidebar({ isOpen, onToggle }) {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const navItems = [
        { name: "Home", path: "/", logo: logo1 },
        { name: "Recent", path: "/recent", logo: logo2 },
        { name: "My resources", path: "/resources", logo: logo3 },
    ];

    const settings = [
        { name: "Settings", path: "/settings", logo: logo4 },
    ]



    return (
        <>
            <div className="md:hidden  top-0 left-0 right-0 bg-white p-2 sm:p-3 md:p-4 z-50">
                <button
                    onClick={onToggle}
                    className="text-[#2F3A4C] focus:outline-none mt-3"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={` absolute md:relative w-50 md:w-64 h-full min-h-[1024px]  bg-white left-0 top-0 p-4 flex flex-col  transition-all duration-300 z-50
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
            >

                <div className=' flex justify-between text-center items-center'>
                    <div className='flex items-center justify-start'>
                        <img src={logo} alt="navlogo" className="md:w-8 md:h-8 w-6 h-6" />
                        <h2 className="md:text-xl font-semibold pl-1 text-[#2F3A4C]">ClassPlanner</h2>
                    </div>
                    <button onClick={onToggle} className=' md:hidden'>
                        <FiX />
                    </button>
                </div>

                {/* Navigation Items */}
                <nav className="mt-14 flex-1">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `p-2 flex items-center justify-start rounded-lg transition-colors ${isActive ?
                                            'bg-[#ECF2FC] text-[#2F3A4C]' :
                                            'hover:bg-gray-200 text-[#2F3A4C]'}`
                                    }>
                                    <img
                                        src={item.logo}
                                        alt="logo"
                                        className="md:w-5 md:h-5 mr-3 w-4 h-4 "
                                    />
                                    <span className=' text-sm md:text-[17px]'>{item.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Upgrade Section */}
                <div className="mt-auto mb-4 p-2 md:p-4 bg-[#F8FAFF] rounded-lg border border-[#E0E7FF]">
                    <div className='flex pb-4 justify-between items-center'>
                        <h3 className=" text-[14px] md:text-[17px] font-medium text-[#2F3A4C]">
                            Upgrade your subscription
                        </h3>
                        <img src={plane} alt="plane" className='md:w-10 md:h-10 mr-3 w-7 h-7' />
                    </div>
                    <p className="font-sans text-[#6B7280] mb-2 pb-2 text-sm md:text-[15px]">
                        Enhance your experience by upgrading your free account to enjoy premium features
                    </p>
                    <div className="w-full">
                        <Button
                            onClick={() => {
                                navigate('/settings');
                            }}
                            variant='gradient'
                            title="Upgrade"
                            className="w-full text-base p-2"
                        />
                    </div>
                </div>

                {/* Settings */}
                <div>
                    <ul className="space-y-4 pb-5 ">
                        {settings.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `p-2 flex items-center justify-start rounded-lg transition-colors ${isActive ?
                                            'bg-[#ECF2FC] text-[#2F3A4C]' :
                                            'hover:bg-gray-200 text-[#2F3A4C]'}`
                                    }
                                >
                                    <img
                                        src={item.logo}
                                        alt="logo"
                                        className="md:w-5 md:h-5 mr-3 w-4 h-4"
                                    />
                                    <span className='text-sm md:text-[17px]'>{item.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr className=' text-[#C0C4CA]' />
                <div>
                    {user && (
                        <div className=' py-5'>

                            <div className=' p-2 rounded-lg flex items-center text-center cursor-pointer mb-3 text-[#2F3A4C] hover:bg-gray-200'>
                                <span><IoIosLogOut className='md:w-5 md:h-5 mr-3 w-4 h-4' /></span>
                                <button
                                    onClick={logout}
                                    className="text-sm md:text-[17px] cursor-pointer"
                                    aria-label="Logout"
                                >Logout

                                </button>

                            </div>
                            <div className=" flex items-center space-x-2 md:space-x-4 md:hidden ">
                                <img
                                    className="w-7 h-7 md:w-8 md:h-8 rounded-full  inline"
                                    src={user.avatar}
                                    alt="User avatar"
                                />
                                <div className=' flex flex-col'>
                                    <span className="text-gray-700 text-sm md:text-base inline">
                                        {user.name}
                                    </span>
                                    <span className=' text-[10px] text-gray-700 '>
                                        {user.email}
                                    </span>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}