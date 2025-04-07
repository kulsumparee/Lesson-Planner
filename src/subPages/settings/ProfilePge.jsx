import React from 'react'
import { Button } from '../../components/Button'

export const ProfilePge = () => {
  return (
    <div className=' bg-white  rounded-sm pb-10'>
      <div className="flex justify-between p-8">
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
    </div>
  )
}
