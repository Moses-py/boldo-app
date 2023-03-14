import React from "react";

const Input: React.FunctionComponent = () => {
  return (
    <>
      <input
        type="email"
        placeholder="Your email address"
        className="h-[56px] w-[370px] bg-textLight rounded-full pl-[32px] placeholder:text-textDark placeholder:text-sm placeholder:leading-32"
      />
    </>
  );
};

export default Input;
