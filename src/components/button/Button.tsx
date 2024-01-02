import React from "react";

interface ButtonProps {
  children?: string | number;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className: string;
}

export default function Button({
  children,
  onClick,
  type = "button",
  className,
}: ButtonProps) {
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
