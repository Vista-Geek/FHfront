import React, { useRef } from "react";

interface LabelButtonProps {
  itemName: string;
  customWidth?: string;
  inputName: string;
  handleCustomInputChange: (name: string, value: unknown) => void;
}

export default function LabelButton({
  itemName,
  customWidth = "",
  inputName,
  handleCustomInputChange,
}: LabelButtonProps) {
  const InputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <input
        className="radioInputCustom hidden"
        type="radio"
        ref={InputRef}
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
        onClick={() => {
          if (InputRef.current) {
            handleCustomInputChange(
              InputRef.current.name,
              InputRef.current.value
            );
          }
        }}
      >
        <span className="block px-4 py-3">{itemName}</span>
      </label>
    </>
  );
}
