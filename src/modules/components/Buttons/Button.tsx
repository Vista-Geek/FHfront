import React from 'react';
interface ButtonProps {
  title: string;
  type: 'submit' | 'button';
}

const Button: React.FC<ButtonProps> = ({ type, title }) => {
  return <button type={type}>{title}</button>;
};

export default Button;
