import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assets/images/sidebar/navlogo.svg";
import logo1 from "../assets/images/sidebar/home.svg";
import logo2 from "../assets/images/sidebar/clock.svg";
import logo3 from "../assets/images/sidebar/folder.svg";
import logo4 from "../assets/images/sidebar/home.svg";
import plane from "../assets/images/sidebar/plane.svg"
import { Button } from './Button';

export default function Sidebar() {
    const navigate = useNavigate();
    const navItems = [
        { name: "Home", path: "/", logo: logo1 },
        { name: "Recent", path: "/recent", logo: logo2 },
        { name: "My resources", path: "/resources", logo: logo3 },
    ];

    const settings = [
        { name: "Settings", path: "/settings", logo: logo4 }
    ];

    return (
        <div className="w-16 md:w-64 min-h-[1024px] h-full bg-white  left-0 top-0 p-2 md:p-4 flex flex-col overflow-y-auto transition-all duration-300 z-50">
            <div className='flex items-center justify-center md:justify-start'>
                <img src={logo} alt="navlogo" className="w-6 h-6 md:w-8 md:h-8" />
                <h2 className="text-xl font-semibold pl-1 text-[#2F3A4C] hidden md:block">ClassPlanner</h2>
            </div>

            {/* Navigation Items */}
            <nav className="mt-8 md:mt-14 flex-1">
                <ul className="space-y-1 md:space-y-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `p-2 flex items-center justify-center md:justify-start rounded-lg transition-colors ${isActive ?
                                        'bg-[#ECF2FC] text-[#2F3A4C]' :
                                        'hover:bg-gray-200 text-[#2F3A4C]'}`
                                }>
                                <img
                                    src={item.logo}
                                    alt="logo"
                                    className="w-5 h-5 md:mr-3"
                                />
                                <span className="hidden md:inline">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Upgrade Section */}
            <div className="mt-auto mb-4 p-2 md:p-4 bg-[#F8FAFF] rounded-lg border border-[#E0E7FF]">
                <div className=' flex pb-4'>
                    <h3 className="text-xs md:text-[17px] font-medium text-[#2F3A4C] mb-1 hidden md:block">
                        Upgrade your subscription
                    </h3>
                    <img src={plane} alt="plane" />
                </div>
                <p className=" text-[#6B7280] mb-2 hidden md:block pb-2 text-[14px] ">
                    Enhance your experience by upgrading your free account
                </p>
                <div className="w-full">
                    <Button
                        onClick={() => navigate('/upgrade')}
                        variant='gradient'
                        title={<><span className="hidden md:inline">Upgrade</span><span className="md:hidden">↑</span></>}
                        className="w-full text-xs md:text-base p-1 md:p-2"
                    />
                </div>
            </div>

            {/* Settings */}
            <div>
                <ul className="space-y-1 md:space-y-4 pb-10">
                    {settings.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `p-2 flex items-center justify-center md:justify-start rounded-lg transition-colors ${isActive ?
                                        'bg-[#EC2FC] text-[#2F3A4C]' :
                                        'hover:bg-gray-200 text-[#2F3A4C]'}`
                                }
                            >
                                <img
                                    src={item.logo}
                                    alt="logo"
                                    className="w-5 h-5 md:mr-3"
                                />
                                <span className="hidden md:inline">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}