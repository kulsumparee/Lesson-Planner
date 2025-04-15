import React, { useState } from 'react';
import SubscriptionPge from '../subPages/settings/SubscriptionPge';
import { ProfilePge } from '../subPages/settings/ProfilePge';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [activeSection, setActiveSection] = useState('data');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveSection(tab === 'profile' ? 'profile' : 'subs');
  }
  return (
    <div className='h-full min-h-[1024px] md:min-h-screen'>
      <ul className="flex list-none pb-10 gap-10  text-lg text-[#344054] ">
        <li
          onClick={() => handleTabClick('profile')}
          id='profile'
          className={`cursor-pointer
                     ${activeTab === 'profile' ? 'font-bold text-[#4378E0] border-b-2' : ' font-sans'}`}
        >
          Profile
        </li>
        <li
          onClick={() => handleTabClick('subs')}
          id='subs'
          className={`cursor-pointer ${activeTab === 'subs' ? 'font-bold text-[#4378E0] border-b-2 ' : 'font-sans'}`}
        >
          Subscription
        </li>
      </ul>

      {activeTab === 'profile' && (
        <div className='profile'>
          <ProfilePge />
        </div>
      )}

      {activeTab === 'subs' && (
        <div className='subscription'>
          <SubscriptionPge />
        </div>
      )}
    </div>
  )
}
export default Settings
