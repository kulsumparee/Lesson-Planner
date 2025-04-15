import React from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuth } from '../../context/AuthContext';

export const ProfilePge = () => {
  const { user } = useAuth();
  return (
    <div className=' bg-white  rounded-sm pb-10'>
      <div className="md:flex justify-between p-4 md:p-8 space-y-5">
        <div className="">
          <h1 className=' text-[#161B23] font-semibold text-xl'>Personal Info</h1>
          <p className=' font-sans py-2 text-[#344054] text-lg'>Update your personal details here.</p>
        </div>

        <div className=" flex flex-row gap-5">
          <div> <Button variant='custome' title="Cancle" className=" w-[95px] " /></div>
          <div> <Button variant='blue' title="Save" className=" w-[95px] " /></div>
        </div>
      </div>
      <hr className=' text-[#C0C4CA]' />


      <div className=''>
        {user && (
          <form form className=' px-3 md:px-10  font-sans'>

            <div className=' md:flex justify-between space-x-4 items-center pt-7 '>
              <label htmlFor="name" className=' text-[#414453] font-semibold md:text-lg ' >Name</label>
              <input type="text" name="" id="" placeholder={user.name} className='  mt-3 px-4 py-3  outline-[#4378E0] rounded-sm w-full max-w-[500px] border-2 border-[#C0C4CA] ' />
            </div>
            <hr className=' text-[#C0C4CA] mt-5' />

            <div className=' md:flex justify-between space-x-4 items-center pt-7 '>
              <label htmlFor="name" className=' text-[#414453] font-semibold md:text-lg ' >Email address</label>
              <input type="text" name="" id="" placeholder={user.email} className=' mt-3 px-4 py-3  outline-[#4378E0] rounded-sm w-full max-w-[500px] border-2 border-[#C0C4CA] ' />
            </div>
            <hr className=' text-[#C0C4CA] mt-5' />

            <div className=' md:flex justify-between space-x-4 items-center pt-7 '>
              <label htmlFor="name" className=' text-[#414453] font-semibold md:text-lg ' >Country</label>
              <input type="text" name="" id="" placeholder="Pakistan" className=' mt-3 px-4 py-3  outline-[#4378E0] rounded-sm w-full max-w-[500px] border-2 border-[#C0C4CA] ' />
            </div>
            <hr className=' text-[#C0C4CA] mt-5' />

          </form>

        )}
      </div>

    </div>
  )
}
