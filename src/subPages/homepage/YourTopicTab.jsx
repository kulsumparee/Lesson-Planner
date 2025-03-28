import React from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router';
import star from "../../assets/images/header/star.svg"

export const YourTopicTab = () => {
    const navigate = useNavigate();
    return (
        <form className=' w-full'>
            <div className='pt-5'>
                <Input title="Your topic" holder="Enter topic. eg: Solar system, Photosynthesis" />
            </div>
            <div className='mt-5'>
                <Input
                    classname="h-40 flex text-start items-start pb-28"
                    title="Additional instructions (optional)"
                    holder="Specify any additional requirements, such as student level etc."
                />
            </div>
            <div className='md:flex w-full justify-between gap-10'>
                <Input title="Standards (optional)" holder="NGSS, NYS standards etc." />
                <Input title="Output language" holder="English" />
            </div>

            <div className='pt-10'>
                <Button
                    onClick={() => navigate('/generate-lesson')}
                    title="Generate lesson plan"
                    variant="gradient"
                    className="w-full P-3"
                    icon={<img src={star} alt="star" width={20} height={20} />}
                />
            </div>
        </form>
    )
}
