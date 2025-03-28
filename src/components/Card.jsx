import React from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router';

export default function Card({ title, description, imge, newfolder, buttonTitle, link, width, height}) {
    const navigate = useNavigate();

    return (
        <div

            className='flex flex-col items-center shadow shadow-gray-200 px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-10 bg-gradient-to-tr from-[#e2fbef] via-white to-[#e0eafc] rounded-lg mx-auto'
        >
            <img
                src={imge}
                alt="plan"

            />
            <h1 className='py-4 md:py-5 text-lg md:text-xl font-bold text-center text-[#161B23]'>
                {title}
            </h1>
            <p className='text-[#2F3A4C] tracking-wide font-sans py-2 md:py-3 text-center'>
                {description}
            </p>


            <Button
                title={buttonTitle}
                onClick={() => navigate(link)}
                variant='blue'
                className="w-full max-w-xs md:max-w-sm py-2 md:py-3 mt-5"
            />
            <p className=' py-5 text-[#4378E0] cursor-pointer '>{newfolder}</p>
        </div>
    );
}