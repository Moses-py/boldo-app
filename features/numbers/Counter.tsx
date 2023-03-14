import React from "react";

interface CounterProps {
  number: string;
}

const Counter: React.FunctionComponent<CounterProps> = ({ number }) => {
  return (
    <>
      <div className="container flex justify-center mx-auto">
        <div className="text-left">
          <h1 className="text-2xl leading-56 text-primary font-primary mb-[32px]">
            {number}
          </h1>
          <p className="text-md leading-36 text-primary font-secondary ">
            Cool feature title
          </p>
        </div>
      </div>
    </>
  );
};

export default Counter;
