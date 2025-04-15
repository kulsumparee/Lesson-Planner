import React from 'react';
import img from "../assets/images/homepge/pana.svg";
import { useAuth } from '../context/AuthContext';
import Card from '../components/Card';

export default function Home() {
    const { user } = useAuth();
    const cards = [
        {
            imge: img,
            title: "Lesson Plan",
            description: "Create detailed lesson plan with objectives and activities.",
            buttonTitle: "Create Lesson Plan",
            link: "/create-lesson"
        },
    ];

    return (
        <div className="flex flex-col items-center h-full min-h-[1024px] md:min-h-screen  p-0 py-8 md:py-12">
            {user && (
                <div key={ user.id}>
                    <h1 className="text-2xl md:text-3xl font-medium tracking-wider text-[#161B23] text-center">
                        Hi, {user.name}
                    </h1>
             </div>
            )}
            <p className='py-6 md:py-8 text-[#2F3A4C] font-sans text-center max-w-2xl mx-auto px-4'>
                Let's begin brewing some teaching materials effortlessly with ClassPlanner AI
            </p>
            <div className="w-full max-w-4xl">
                {cards.map((cards) => (
                    <div key={cards.id}>
                        <Card {...cards} />
                    </div>
                ))}
            </div>
        </div>
    );
}