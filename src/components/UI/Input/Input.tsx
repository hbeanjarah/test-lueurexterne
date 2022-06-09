import React, { FC } from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  labelName: string;
  showError: boolean;
}

const Input: FC<InputProps> = ({ labelName, showError, ...props }) => {
  return (
    <div>
      <label
        htmlFor="last_name"
        className="block mt-3 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {labelName}
      </label>
      <input
        className="bg-gray-50 mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props}
      />
      {showError ? (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">{labelName}</span> est obligatoire
        </p>
      ) : null}
    </div>
  );
};

export default Input;
