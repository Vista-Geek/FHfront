import React from 'react';
interface ButtonProps {
  type: 'submit' | 'button';
  classnames?: string;
  width: string;
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  classnames = '',
  width = '',
  title
}) => (
  <button type={type} className={`h-10 rounded-fh ${classnames} ${width}`}>
    {title ? title : children}
  </button>
);

export default Button;
