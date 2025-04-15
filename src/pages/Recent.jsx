import React from 'react'
import Card from "../components/Card";
import img from "../assets/images/recentpage/recentbox.svg"
export default function Recent() {
    const recentItems = [
        {
            imge: img,
            title: "No recent content",
            description: "You haven't created any content yet. Create your first one now!",
            buttonTitle: "Create your first AI content",
            link: "/create-lesson"
        },
    ];

    return (
        <div className='h-full min-h-[1024px] md:min-h-screen'>
            <div className="space-y-4 ">
                {recentItems.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </div>
    );
}