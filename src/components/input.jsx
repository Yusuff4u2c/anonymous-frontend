import React from "react";

const Input = React.forwardRef(
  ({ className = "", error, onChange, ...props }, ref) => {
    return (
      <>
        <input
          className={`outline-none bg-transparent w-[400px] ${className} pb-2 px-2 border-b-2 ${
            error ? "border-red-500" : ""
          }`}
          onChange={onChange}
          {...props}
          ref={ref}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </>
    );
  }
);

Input.displayName = Input;

export default Input;
