import React from 'react'
import Card from "../components/Card";
export default function Recent() {
    const recentItems = [
        { title: "Math Lesson", date: "2 days ago", progress: 75 },
        { title: "Science Quiz", date: "1 week ago", progress: 100 }
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Recent Activities</h1>
            <div className="space-y-4">
                {recentItems.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </div>
    );
}