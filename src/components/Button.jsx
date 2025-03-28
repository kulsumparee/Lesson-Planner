import React from 'react'

export const Button = ({ title, className, icon, onClick, variant = "" }) => {
  const baseClasses = " py-2 rounded-md text-white cursor-pointer text-center flex items-center justify-center gap-2";

  const variantClasses = {
    gradient: "bg-gradient-to-r from-[#30559F] to-[#4378E0] hover:from-[#4378E0] hover:to-[#30559F]",
    blue: "bg-[#4378E0] hover:bg-[#3D6DCC] "
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
