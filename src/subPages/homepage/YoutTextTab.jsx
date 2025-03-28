import React from 'react'
import { Input } from '../../components/Input'
import star from "../../assets/images/header/star.svg"
import { Button } from '../../components/Button'


export const YoutTextTab = () => {
    return (
        <div>
            <div className='mt-5'>
                <Input
                    classname="h-60"
                    title="Paste your text content"
                    holder="Enter or paste your text here..."
                />
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
        </div>
    )
}
