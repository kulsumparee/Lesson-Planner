import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Check for existing session on app load
    useEffect(() => {
        const storedUser = localStorage.getItem('classPlannerUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (credentials) => {
        // In a real app, you would verify credentials with your backend
        const userData = {
            id: Date.now().toString(),
            name: credentials.name || 'User',
            email: credentials.email,
            token: 'mock-token-' + Math.random().toString(36).substring(2, 15),
            avatar: `https://ui-avatars.com/api/?name=${credentials.name || 'User'}&background=random`
        };

        setUser(userData);
        localStorage.setItem('classPlannerUser', JSON.stringify(userData));
        return userData;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('classPlannerUser');
        navigate('/login');
    };

    // Only render children when auth state is loaded
    if (loading) {
        return <div className="flex items-center justify-center max-h-[1024px] h-full ">Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}