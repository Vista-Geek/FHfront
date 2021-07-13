import React from "react";
interface ButtonProps {
  type: "submit" | "button";
  classnames?: string;
  width: string;
  title?: string;
  rounded?: "rounded-fh" | "rounded";
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  classnames = "",
  width = "",
  title,
  rounded = "rounded-fh",
}) => (
  <button type={type} className={`h-10 ${rounded} ${classnames} ${width}`}>
    {title ? title : children}
  </button>
);

export default Button;
