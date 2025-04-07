import React from 'react';
import { createContext, useContext, useState } from 'react';

const LessonContext = createContext();

export function LessonProvider({ children }) {
    const [lessonData, setLessonData] = useState({
        topic: '',
        instructions: '',
        standards: '',
        language: 'English'
    });

    const updateLessonData = (field, value) => {
        setLessonData(prev => ({

            ...prev,
            [field]: value
        }));
    };

    return (
        <LessonContext.Provider value={{ lessonData, updateLessonData }}>
            {children}
        </LessonContext.Provider>
    );
}

export function useLesson() {
    const context = useContext(LessonContext);
    if (!context) {
        throw new Error('useLesson must be used within a LessonProvider');
    }
    return context;
}