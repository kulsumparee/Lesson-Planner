import React from 'react';
import img2 from "../assets/images/header/star.svg";
import { useAuth } from '../context/AuthContext';
import { IoIosLogOut } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export default function Header({ title = "" }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <header className="bg-white  top-0 right-0 left-0 md:left-64 z-10 h-16 md:h-20 ">
            <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
                <div className="flex justify-between items-center">
                    {/* Title Section - Left */}
                    <div className="flex items-center">
                        <h1 className=' text-base md:text-lg truncate max-w-[120px] sm:max-w-none'>
                            {title} 
                        </h1>
                    </div>

                    {/* Actions Section - Right */}
                    <div className='flex gap-2 md:gap-4 items-center'>
                        <Button
                            title="Create New"
                            variant='blue'
                            className=' px-3 '
                            onClick={() => navigate('/create-lesson')}
                            icon={
                                <img
                                    src={img2}
                                    alt="plus"
                                    className="w-4 h-4 md:w-5 md:h-5"
                                />
                            }
                        />

                        {/* User Info */}
                        {user && (
                            <div className="flex items-center space-x-2 md:space-x-4">
                                <img
                                    className="w-7 h-7 md:w-8 md:h-8 rounded-full"
                                    src={user.avatar}
                                    alt="User avatar"
                                />
                                <span className="text-gray-700 text-sm md:text-base hidden md:inline">
                                    {user.name}
                                </span>
                                <button
                                    onClick={logout}
                                    className="text-gray-900 text-lg md:text-xl font-bold cursor-pointer hover:text-red-500 transition-colors"
                                    aria-label="Logout"
                                >
                                    <IoIosLogOut />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}