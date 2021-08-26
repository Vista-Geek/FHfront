import React from "react";
interface ButtonProps {
  type: "submit" | "button";
  classnames?: string;
  width: string;
  title?: string;
  rounded?: "rounded-fh" | "rounded";
  disabled?: boolean;
  cursor?: string | "default";
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  classnames = "",
  width = "",
  title,
  rounded = "rounded-fh",
  disabled,
  cursor,
}) => (
  <button
    disabled={disabled}
    type={type}
    style={{ cursor: cursor }}
    className={`h-10 ${rounded} ${classnames} ${width}`}
  >
    {title ? title : children}
  </button>
);

export default Button;
