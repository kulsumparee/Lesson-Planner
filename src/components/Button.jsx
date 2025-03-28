import React from 'react'

export const Button = ({ title, className }) => {
  return (
      <div>
      <button
        className={` ${className} w-full py-2 rounded-md text-white cursor-pointer text-center bg-gradient-to-r from-[#30559F] to-[#4378E0] hover:bg-gradient-to-r hover:to-[#30559F] hover:from-[#4378E0]`}>
              {title}
          </button>
    </div>
  )
}
