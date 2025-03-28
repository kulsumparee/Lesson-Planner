import React, { useState } from 'react';

const Upgrade = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [activeSection, setActiveSection] = useState('data'); 

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveSection(tab === 'profile' ? 'profile' : 'subs');
    }

    return (
        <div>
            <ul className="flex list-none p-0 gap-5">
                <li
                    onClick={() => handleTabClick('profile')}
                    id='profile'
                    className={`cursor-pointer
                     ${activeTab === 'profile' ? 'font-bold text-[#4378E0] border-b-2' : 'font-normal'}`}
                >
                    Profile
                </li>
                <li
                    onClick={() => handleTabClick('subs')}
                    id='subs'
                    className={`cursor-pointer ${activeTab === 'subs' ? 'font-bold text-[#4378E0] border-b-2' : 'font-normal'}`}
                >
                    Subscription
                </li>
            </ul>

            {activeTab === 'profile' && (
                <div className='profile'>
                    <h2>Profile Information</h2>
                    <p>This is where your profile details would appear.</p>
                </div>
            )}

            {activeTab === 'subs' && (
                <div className='subscription'>
                    <h2>Subscription Details</h2>
                    <p>This is where your subscription information would appear.</p>
                </div>
            )}
        </div>
    )
}

export default Upgrade;
