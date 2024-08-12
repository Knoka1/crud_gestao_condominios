"use client";
import React, { MouseEventHandler } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
interface CustomButtonProps {
  title: string;
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  textStyles?: string;
  rightIcon?: boolean;
}
const CustomButton = ({
  title,
  className,
  handleClick,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${className}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative">
          <FaArrowAltCircleRight size={20} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
