import React from "react";

interface StepProps {
  stepTitle: string;
  stepSecondTitle: string;
  last?: boolean;
}

const NewPostStep: React.FC<StepProps> = ({
  stepTitle,
  stepSecondTitle,
  children,
  last = false,
}) => {
  return (
    <div
      className={`relative ${
        last ? "border-l-2 min-h-[250px]" : "border-l-2"
      }  pl-12 sm:pl-16 pb-6 ml-2 border-white`}
    >
      <div className="absolute -left-22 -bottom-14 sm:-left-30 flag-sharp m-0"></div>
      <div>
        <h5 className="text-xl">{stepTitle}</h5>
        <p className="text-md font-herbo text-purpleCust-text">
          {stepSecondTitle}
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default NewPostStep;
