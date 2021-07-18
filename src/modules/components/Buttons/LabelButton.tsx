import React from "react";

interface LabelButtonProps {
  itemName: string;
  customWidth?: string;
  inputName: string;
  postData?(key: string, value: string): any;
}

export default function LabelButton({
  itemName,
  customWidth = "",
  inputName,
  postData,
}: LabelButtonProps) {
  const addPostData = () => {
    postData(inputName, itemName);
  };

  return (
    <>
      <input
        className="radioInputCustom hidden"
        type="radio"
        name={inputName}
        value={itemName}
        id={itemName}
      />
      <label
        htmlFor={itemName}
        className={`
          ${customWidth}
          relative
          m-1 ml-0
          inline-block
          w-24
          sm:w-28
          h-10
          bg-purpleCust-card 
          hover:bg-purpleCust
          font-herbo 
          font-semibold 
          text-sm
          hover:cursor-pointer
          text-center
          rounded-md
          `}
        onClick={addPostData}
      >
        <span className="block px-4 py-3">{itemName}</span>
      </label>
    </>
  );
}
