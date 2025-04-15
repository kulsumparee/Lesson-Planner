import React from 'react'
import Card from '../components/Card';
import img from "../assets/images/recources/bro.svg"


const Resources = () => {
  const recentItems = [
    {
      imge: img,
      title: "No content yet",
      description: "Your library is empty. Create your first AI content now!",
      buttonTitle: "Create your first AI content",
      newfolder: "or add a new folder",
      link: "/create-lesson",

    },
  ];

  return (
    <div className='h-full min-h-[1024px] md:min-h-screen'>
      <div className="space-y-4">
        {recentItems.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Resources