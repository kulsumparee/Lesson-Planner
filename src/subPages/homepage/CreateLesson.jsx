import React, { useState } from 'react';
import arrow from "../../assets/images/homesubpge/arrow.svg"
import idea from "../../assets/images/homesubpge/bulb.svg"
import page from "../../assets/images/homesubpge/page.svg"
import text from "../../assets/images/homesubpge/text.svg"
import web from "../../assets/images/homesubpge/globe.svg"
import { YourTopicTab } from './YourTopicTab';
import { YoutTextTab } from './YoutTextTab';
import { useNavigate } from 'react-router';
import Card from '../../components/Card';
import crown from "../../assets/images/settings/crown.svg"


const CreateLesson = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('idea');
    const [activeSection, setActiveSection] = useState('topic');
    const [showWebpageModal, setShowWebpageModal] = useState(false);

    const handleGoBack = () => navigate(-1);

    const data = [
        { img: idea, title: "Idea", id: 'idea' },
        { img: text, title: "Text", id: 'text' },
        { img: web, title: "Webpage", id: 'webpage' },
    ];

    const ModalData = [
        {
            id: 1,
            imge: crown,
            title: "This is a Pro feature",
            description: "Upgrade to Pro plan to unlock this feature.",
            buttonTitle: "Upgrade to Pro",

        }
    ]
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
        setActiveSection(tabId === 'idea' ? 'topic' : 'text'  );

        // Show modal only when webpage is clicked
        if (tabId === 'webpage') {
            setShowWebpageModal(true);
        }
    };

    const closeModal = () => {
        setShowWebpageModal(false);
        setActiveTab('idea'); // Optional: switch back to idea tab
        setActiveSection('topic');
    };

    return (
        <div className='bg-white py-10 px-5 md:px-10 rounded-sm'>
            <div className='flex justify-between'>
                <button onClick={handleGoBack} className='flex gap-1 bg-[#EBECEE] text-md py-1 px-2 rounded-md cursor-pointer'>
                    <img src={arrow} alt="arrow" />
                    Back
                </button>
                <button className='flex gap-1 bg-[#FFE6C4] text-md py-1 px-2 rounded-md cursor-pointer'>
                    <img src={idea} alt="idea" width={25} height={25} />Ideas
                </button>
            </div>

            <div className='flex flex-col items-center'>
                <div className='bg-[#E8F7F1] p-4 rounded-sm'>
                    <img src={page} alt="page" width={24} height={24} />
                </div>
                <h1 className='font-semibold text-2xl pt-5 pb-3'>Create Lesson Plan</h1>
                <p className='font-sans flex flex-wrap text-[#5D6676] md:text-lg'>Create a lesson plan from any source - topic, text.</p>

                {/* Tabs */}
                <div className='bg-gray-100 flex gap-2 md:gap-5 py-2 px-2 md:px-5 rounded-full mt-10'>
                    {data.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleTabClick(item.id)}
                            className={`flex py-2 px-2 md:px-4 rounded-full cursor-pointer gap-1 text-center ${activeTab === item.id ? 'bg-white' : 'bg-transparent'
                                }`}
                        >
                            <img src={item.img} alt={item.title} width={20} height={20} />
                            <p className='text[#2F3A4C] text-sm md:text-md'>{item.title}</p>
                        </div>
                    ))}
                    <button onClick={() => navigate('/settings')} className='bg-blue-500 md:flex hidden text-white px-3 items-center text-center cursor-pointer rounded-full'>pro</button>
                </div>
            </div>

            {/* Pro Feature Modal */}
            {showWebpageModal && (
                <div className="fixed inset-0  bg-[#000000B2] flex justify-center items-center">
                    <div className="w-full max-w-[600px] h-100 md:ml-40">
                        <button className="absolute top-2 right-5 text-2xl text-white bg-black w-10 cursor-pointer h-10 rounded-full " onClick={() => closeModal()}>✖</button>
                        {ModalData.map((cards) => (
                            <div key={cards.id}>
                                <Card {...cards} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
    
            {/* Conditional Sections */}
            {activeSection === 'topic' && (
                <div className='your-topic'>
                    <YourTopicTab />
                </div>
            )}

            {activeSection === 'text' && (
                <div className='your-text'>
                    <YoutTextTab />
                </div>
            )}

  


        </div>
    );
};

export default CreateLesson;