import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../assets/images/homepge/pana.svg";
import { useAuth } from '../context/AuthContext';

export default function Home() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const cards = [
        {
            imge: img,
            title: "Lesson Plan",
            description: "Create detailed lesson plan with objectives and activities.",
            action: "Create lesson plan",
        },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen p-0 py-8 md:py-12">
            {user && (
                <h1 className="text-2xl md:text-3xl font-medium tracking-wider text-[#161B23] text-center">
                    Hi, {user.name}
                </h1>
            )}
            <p className='py-6 md:py-8 text-[#2F3A4C] font-sans text-center max-w-2xl mx-auto px-4'>
                Let's begin brewing some teaching materials effortlessly with ClassPlanner AI
            </p>
            <div className="w-full max-w-4xl">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center shadow shadow-gray-200 px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-10 bg-gradient-to-tr from-green-50 via-white to-blue-50 rounded-lg mx-auto'
                    >
                        <img
                            src={card.imge}
                            alt="plan"
                            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
                        />
                        <h1 className='py-4 md:py-5 text-lg md:text-xl font-bold text-center'>
                            {card.title}
                        </h1>
                        <p className='text-[#2F3A4C] font-sans py-2 md:py-3 text-center'>
                            {card.description}
                        </p>
                        <button
                            onClick={() => navigate('/create-lesson')}
                            className='bg-[#4378E0] hover:bg-[#3D6DCC] text-white py-2 px-4 md:py-3 md:px-6 rounded-md my-4 md:my-5 w-full max-w-xs md:max-w-sm cursor-pointer transition-colors duration-200'
                        >
                            {card.action}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}