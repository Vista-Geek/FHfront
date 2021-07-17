import React from "react";

interface HouseInfoSectionProps {
  labelFor: string;
  labelTitle: string;
}

const HouseInfoSection: React.FC<HouseInfoSectionProps> = ({
  labelFor,
  labelTitle,
  children,
}) => {
  return (
    <div className="mb-4">
      <label
        className="block text-white text-sm font-semibold mb-2"
        htmlFor={labelFor}
      >
        {labelTitle}
      </label>
      {children}
    </div>
  );
};

export default HouseInfoSection;
