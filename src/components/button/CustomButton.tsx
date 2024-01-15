import React from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import "./CustomButton.css";

interface ButtonProps {
  children?: string | number;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  href?: string;
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: "var(--jaguar-color)",
  backgroundColor: "var(--white-smoke-color)",
  border: "1px solid transparent",
  padding: "16px 36px",
  fontFamily: "Plus Jakarta Sans",
  fontStyle: "normal",
  fontWeight: "800",
  lineHeight: "normal",
  textTransform: "none",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "transparent",
    borderColor: "var(--white-smoke-color)",
    color: "var(--white-smoke-color)",
  },
}));

export default function CustomButton({
  children,
  onClick,
  type = "button",
  className,
  href,
}: ButtonProps) {
  return (
    <ColorButton
      variant="contained"
      onClick={onClick}
      type={type}
      className={`button ${className}`}
      href={href}
    >
      {children}
    </ColorButton>
  );
}
