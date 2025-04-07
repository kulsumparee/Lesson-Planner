import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from "../assets/images/sidebar/navlogo.svg"
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({
                email,
                password,
                rememberMe
            });
            navigate('/');
        } catch (err) {
            setError('Invalid email or password');
        }
    };


    return (
        <div className="max-w-[400px] w-full mx-auto mt-20 p-6 flex flex-col text-center bg-white rounded-lg shadow-md">
            <div className=' flex flex-row mx-auto items-center text-center pb-5'>
                <img src={logo} alt="logo" />
                <h2 className="text-2xl font-bold text-center text-[#252D3C]"> Class Planner</h2>
            </div>
            <p className=' text-[#2F3A4C] pb-8'>AI-Powered Lesson Planning Assistant</p>

            <h1 className=' text-xl font-medium text-start pt-5 text-[#252D3C]'>Sign In</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4 text-start text-[#252D3C] font-sans font-medium w-full ">
                <Input title="Email" holder="Enter email" classname=" font-normal" />
                <Input title="Password" holder="Password" classname=" font-normal" />

                <div className=' flex justify-between'>
                    <div className="flex items-center mb-4">
                        <input
                            id="rememberMe"
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border border-[#4378E0]"
                        />
                        <label htmlFor="rememberMe" className="ml-2 text-md text-gray-600 font-sans">
                            Remember Me
                        </label>
                    </div>
                    <div className=' text-[#4378E0] font-sans'>
                        <button>Forgot Password</button>
                    </div>
                </div>
                
                <Button title="Sign In" variant='blue' className=" w-full " />

                <div className="flex items-center justify-center gap-2 my-5">
                    <hr className="flex-1 border-gray-300" />
                    <p className="px-2 text-gray-500">OR</p>
                    <hr className="flex-1 border-gray-300" />
                </div>
                <div className="flex flex-col gap-4 mt-6">
                <button className="flex items-center w-full justify-center gap-2 bg-white border cursor-pointer border-[#2D3142] rounded-lg px-4 py-3 text-sm font-medium text-[#2D3142] hover:bg-gray-50 transition-colors">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Sign in with Google
                    </button>

                    <button className="text-sm border border-[#2D3142] text-[#2D3142] hover:bg-gray-50 cursor-pointer font-medium py-3 px-4 rounded-lg transition-colors">
                        Continue as Guest
                    </button>
                </div>
            </form>
            <p className="mt-4 text-center text-[#343434] text-md py-4">
                Don't have an account?{' '}
                <a href="/signup" className="text-[#4378E0] text-lg ">
                    Sign up
                </a>
            </p>
        </div>
    );
}