import React from 'react'
import { useState } from 'react';

export const Input = ({ title, holder, classname }) => {
  const [value, setValue] = useState('');

  const handleAutofill = () => {
    if (value) return;

    if (title.includes("topic")) {
      setValue("Solar system");
    } else if (title.includes("Standards")) {
      setValue("NGSS");
    } else if (title.includes("language")) {
      setValue("English");
    } else if (title.includes("instructions")) {
      setValue("Specify any additional requirements, such as student level etc.");
    } 
  };

  return (
    <div className='w-full mt-5'>
      <label className='text-[#252D3C]'>{title}</label> <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={handleAutofill}  
        placeholder={holder}
        className={`rounded-md py-2 w-full focus:border-[#4378E0] focus:shadow focus:shadow-[#4378E03D] focus:outline-none border-2 border-[#777F8C] p-3 mt-2 ${classname}`}
      />
    </div>
  );
};
