import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function MainLayout({ children, title, hideSidebar = false, hideheader = false}) {
  return (
    <div className="flex bg-gray-100 h-full min-h-screen max-h-[1024px] ">
      {!hideSidebar && <Sidebar />}
          <div className={`flex-1 ${!hideSidebar ? '' : ''}`}>
              {!hideheader && <Header title={title}  />}
              <div className={` ${!hideheader ? '' : ''}`}>
        {/* <Header title={title} /> */}
          <main className="flex-1 overflow-y-auto md:p-8 p-3 h-full">
          {children}
        </main>
      </div>
          </div>
      </div>
  );
}