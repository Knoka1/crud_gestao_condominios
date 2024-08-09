"use client";
import React, { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: string;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
const CustomButton = ({ title, className, handleClick }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${className}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
