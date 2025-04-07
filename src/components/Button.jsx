import React from 'react'

export const Button = ({ title, className, icon, onClick, variant = "" }) => {
  const baseClasses = " py-2 rounded-md  cursor-pointer text-center flex items-center justify-center gap-2  ";

  const variantClasses = {
    gradient: "bg-gradient-to-r from-[#30559F] to-[#4378E0] hover:from-[#4378E0] hover:to-[#30559F] shadow-lg  shadow-[#4378E052] text-white ",
    blue: "bg-[#4378E0] hover:bg-[#3D6DCC] text-white shadow-lg  shadow-[#4378E052]",
    custome: " bg-white text-[#252D3C] border border-[#C0C4CA] "
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {title}
    </button>
  );
};
