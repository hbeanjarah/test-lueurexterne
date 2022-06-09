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
    "bg-emerald-500  text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
    { "bg-transparent": transparent },
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
