import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Accordion = ({ question, children }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleAction = () => {
    setIsActive(!isActive);
  };
  return (
    //
    <div>
      {/* accordion */}
      <div className=" w-full rounded-md shadow-sm mb-4">
        <div
          className="d-flex justify-content-center align-items-center"
          onClick={toggleAction}
        >
          <h2 className="text-center fs-5">{question}</h2>
          {isActive ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </div>
        {isActive && (
          <div className="border-top-1 px-4 py-3 text-center">{children}</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
