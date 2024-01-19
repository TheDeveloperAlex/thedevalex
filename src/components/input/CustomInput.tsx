import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

import "./CustomInput.css";

interface CustomInputProps {
  id?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  error?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
}
const CustomTextField = styled(TextField)({
  "& label": {
    color: "var(--white-opacity-05)",
    background: "var(--jaguar-color)",
    padding: "0px 2px",
  },
  "& input": {
    color: "var(--white-opacity-05)",
  },
  "& input.Mui-disabled": {
    color: "var(--charcoal-color)",
    WebkitTextFillColor: "var(--charcoal-color)",
  },
  "& label.Mui-disabled": {
    color: "var(--charcoal-color)",
  },
  "& label.Mui-focused": {
    color: "var(--white-opacity-05)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--charcoal-color)",
    },
    "&:hover fieldset": {
      borderColor: "var(--pink-swan-color)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--pink-swan-color)",
    },
  },
  "& .MuiOutlinedInput-root.Mui-disabled": {
    "& fieldset": {
      borderColor: "var(--charcoal-color)",
    },
    "&:hover fieldset": {
      borderColor: "var(--charcoal-color)",
    },
  },
});

export default function CustomInput(props: CustomInputProps) {
  const className = props?.className ? props?.className : "";

  return (
    <CustomTextField
      {...props}
      className={`custom-input ${className}`}
      fullWidth
    />
  );
}
