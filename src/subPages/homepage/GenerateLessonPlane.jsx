import React from 'react'
import arrow from "../../assets/images/homesubpge/arrow.svg"
import { useNavigate } from 'react-router';


const GenerateLessonPlan = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className=' w-full min-h-[850px] bg-white rounded-sm  '>
            <div className=' flex justify-between p-8'>
                <button
                    onClick={handleGoBack}
                    className=' flex gap-1 bg-[#EBECEE] text-md py-1 px-2 rounded-md cursor-pointer'>
                    <img src={arrow} alt="arrow" />
                    Back</button>
                <button className=' flex gap-1 bg-[#4378E0] text-white text-md py-1 px-4 rounded-md cursor-pointer'>
                    Save
                </button>
            </div>
            <hr className=' text-[#C0C4CA] p-0' />

            <div>
                
            </div>
        </div>
    )
}

export default GenerateLessonPlan