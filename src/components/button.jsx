import React from "react";

const Button = React.forwardRef(
  ({ children, type = "button", className, onClick, ...others }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        type={type}
        {...others}
        className={`mt-3 w-[400px] ${className} rounded-full p-4 mx-auto bg-gradient-to-r hover:bg-gradient-to-l transition-transform duration-1000 from-[rgb(212,39,160)] from-15% via-[#7a4cc4]  to-[#00dbde] disabled:opacity-20`}
      >
        {children}
      </button>
    );
  }
);

export default Button;
