import React from 'react'

export const Input = ({ title, holder }) => {
  return (
      <div>
          <label htmlFor="name">{title}</label> <br />
          <input type="text" name="" id="" placeholder={holder} className=' rounded-md py-2 w-full  border-2 border-[#777F8C] ' />
    </div>
  )
}
