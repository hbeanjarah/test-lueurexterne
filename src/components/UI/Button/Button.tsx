import React, { FC } from "react";
import classNames from "classnames";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  transparent?: boolean;
  customClasses?: string;
  textColor?: "red" | "white";
}
const Button: FC<ButtonProps> = ({
  name,
  transparent,
  customClasses,
  textColor,
  children,
  disabled,
  ...props
}) => {
  const classes = classNames(
    "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
    { "bg-transparent": transparent },
    { "bg-emerald-500 ": !transparent },
    { "text-red-600": textColor === "red" },
    {
      "text-white": textColor === "white",
    },
    { "bg-slate-400": disabled }
  );
  return (
    <button className={customClasses ?? classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
