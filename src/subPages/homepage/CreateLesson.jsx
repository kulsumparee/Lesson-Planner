import React from 'react'
import { useNavigate } from 'react-router';
import arrow from "../../assets/images/homesubpge/arrow.svg"
import idea from "../../assets/images/homesubpge/bulb.svg"
import page from "../../assets/images/homesubpge/page.svg"
import text from "../../assets/images/homesubpge/text.svg"
import web from "../../assets/images/homesubpge/globe.svg"
import { Input } from '../../components/Input';


const CreateLesson = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const data = [
        {
            img: idea,
            title: "Idea"
        },
        {
            img: text,
            title: "Text"
        },
        {
            img: web,
            title: "Webpage"
        },
    ]


    return (
        <div className=' bg-white py-10 px-10  rounded-sm'>
            <div className=' flex justify-between'>
                <button
                    onClick={handleGoBack}
                    className=' flex gap-1 bg-[#EBECEE] text-lg py-1 px-2 rounded-md cursor-pointer'>
                    <img src={arrow} alt="arrow" />
                    Back</button>
                <button className=' flex gap-1 bg-[#FFE6C4] text-lg py-1 px-2 rounded-md cursor-pointer'>
                    <img src={idea} alt="idea" width={25} height={25} />Ideas</button>
            </div>

            <div className=' flex flex-col items-center'>
                <div className=' bg-[#E8F7F1] p-4 rounded-sm '>
                    <img src={page} alt="page" width={24} height={24} />
                </div>
                <h1 className=' font-semibold text-2xl pt-7 pb-3'>Create Lesson Plan</h1>
                <p className=' font-sans text-[#5D6676] text-lg'>Create a lesson plan from any source - topic, text.</p>

                <div className=' bg-gray-100 flex gap-5 py-2 px-5 rounded-full mt-10'>
                    {data.map((items) => (
                            <div className='flex bg-white py-2 px-4 rounded-full cursor-pointer gap-1 text-center '>
                                <img src={items.img} alt="idea" width={25} height={25} />
                                <p className='text[#2F3A4C]'>{items.title}</p>
                            </div>
                    ))}
                    <button className='bg-blue-500 text-white px-4 cursor-pointer py-1 rounded-full'>pro</button>
                </div>

            </div>
            <div>
                <Input title="name" />
            </div>
        </div>
    )
}

export default CreateLesson