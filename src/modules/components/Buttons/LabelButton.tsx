import React from "react";

interface LabelButtonProps {
  itemName: string;
  customWidth?: string;
  inputName: string;
}

export default function LabelButton({
  itemName,
  customWidth = "",
  inputName,
}: LabelButtonProps) {
  return (
    <>
      <input
        className="radioInputCustom hidden checked:bg-red-200"
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
          m-1
          inline-block
          w-24
          sm:w-28
          h-10
          checked:bg-red-200 
          bg-purpleCust-card 
          hover:bg-purpleCust
          font-herbo 
          font-semibold 
          text-sm
          hover:cursor-pointer
          text-center
          rounded-md
          `}
      >
        <span className="block px-4 py-3">{itemName}</span>
      </label>
    </>
  );
}
