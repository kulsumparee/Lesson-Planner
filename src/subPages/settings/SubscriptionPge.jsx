import React, { useState } from "react";
import { Button } from "../../components/Button";
import Card from "../../components/Card";

const SubscriptionPge = () => {
    const [showImage, setShowImage] = useState(false);

    const Cards = [
        {
            plan: "Free",
            amount: "$0",
            fees: "Free, and Forever will be",
            features: "Basic features :",
            list1: "3 free plans/month (basic templates).",
            list2: "Access to Common Core and NGSS.",
            list3: "5 worksheet downloads/month (text-only).",
            list4: "Access basic AI features",
            topColor: "bg-[#EBECEE]"
        },
        {
            plan: "Pro",
            amount: "$6.99",
            month: "/mo",
            fees: "billed annually",
            buttonTitle: "Upgrade to Pro",
            features: "Everything in Pro, plus :",
            list1: "25 monthly AI generations",
            list2: "25 monthly AI generations",
            list3: "25 monthly AI generations",
            list4: "25 monthly AI generations",
            topColor: "bg-[#FFC880]"
        },
        {
            plan: "Premium",
            amount: "$13.99",
            month: "/mo",
            fees: "billed annually",
            buttonTitle: "Upgrade to Premium",
            features: "Everything in Premium, plus :",
            list1: "25 monthly AI generations",
            list2: "25 monthly AI generations",
            list3: "25 monthly AI generations",
            list4: "25 monthly AI generations",
            topColor: "bg-[#65CC9E]"
        },
    ];



    return (
        <div className="relative">
            <div className='md:flex gap-7 space-y-7'>
                {Cards.map((data, index) => (
                    <div key={index}>
                        <div className='bg-white pb-20 w-[310px] rounded-md'>
                            <div className={`${data.topColor} h-3 rounded-t-md`}></div>
                            <div className='p-3'>
                                <h1 className='text-xl text-[#5D6676]'>{data.plan}</h1>
                                <div className='flex gap-2 items-end py-2'>
                                    <h1 className='text-3xl font-semibold text-[#161B23] '>{data.amount}</h1>
                                    <p className='text-[#5D6676]'>{data.month}</p>
                                </div>
                                <p className='text-[#5D6676] font-sans'>{data.fees}</p>

                                {data.plan !== "Free" && (
                                    <Button
                                        variant="gradient"
                                        title={data.buttonTitle}
                                        className="w-full my-7"
                                        onClick={() => setShowImage(true)}
                                    />
                                )}

                                <p className='my-4 text-[#161B23] font-sans '>{data.features}</p>
                                <ul className='space-y-2 text-[#2F3A4C] font-sans list-none'>
                                    {[data.list1, data.list2, data.list3, data.list4].map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="w-5 h-5 mt-0.5 mr-2 text-[#2F3A4C] font-light" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

         

        </div>
    );
};

export default SubscriptionPge;
