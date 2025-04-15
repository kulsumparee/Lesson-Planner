import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function MainLayout({ children, title, hideSidebar = false, hideheader = false }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-100 h-full min-h-screen max-h-[1024px] overflow-hidden">
      {!hideSidebar && <Sidebar isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />}
  
      <div className="flex-1 flex flex-col min-h-0 relative">
        {/* Overlay for mobile */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isSidebarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
            }`}
          onClick={() => setIsSidebarOpen(false)}
        />

        {!hideheader && <Header title={title} />}

    
        <main className={`flex-1 overflow-y-auto p-3 h-full max-h-[1024px] md:p-8 transition-all duration-300 ${isSidebarOpen ? '' : ''
          }`}>
          {children}
        </main>
  </div>
</div>
  );
}