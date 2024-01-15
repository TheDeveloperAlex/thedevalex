import React from "react";
import "./CustomTextarea.css";

interface TextareaProps {
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  className?: string;
  label?: string;
  error?: boolean;
}

export default function CustomTextarea({
  id,
  value,
  onChange,
  required,
  className,
  label,
  error,
}: TextareaProps) {
  const updatedClassName = [
    "custom-textarea-wrapper",
    className,
    error && "custom-textarea-wrapper-error",
    value !== "" && value !== undefined
      ? "custom-textarea-wrapper-content"
      : "custom-textarea-wrapper-default",
  ]
    .filter((item) => !!item)
    .join(" ");

  return (
    <label className={updatedClassName}>
      <textarea
        id={id}
        className={`custom-textarea`}
        value={value}
        onChange={onChange}
        required={required}
      />
      <span className="custom-textarea-label">{label}</span>
    </label>
  );
}
