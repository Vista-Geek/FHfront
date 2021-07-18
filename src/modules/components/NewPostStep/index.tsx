import React from "react";

interface StepProps {
  stepTitle: string;
  stepSecondTitle: string;
}

const NewPostStep: React.FC<StepProps> = ({
  stepTitle,
  stepSecondTitle,
  children,
}) => {
  return (
    <div className="relative border-l-2 border-white pl-12 sm:pl-16 pb-6">
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
