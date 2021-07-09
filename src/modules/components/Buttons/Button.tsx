import React from 'react';
interface ButtonProps {
  type: 'submit' | 'button';
  classnames?: string;
  width: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  classnames = '',
  width = ''
}) => (
  <button type={type} className={`h-10 rounded-fh ${classnames} ${width}`}>
    {children}
  </button>
);

export default Button;
