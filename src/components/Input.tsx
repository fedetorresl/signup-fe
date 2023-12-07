import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  id: string;
  title: string;
  placeholder: string;
  error?: string;
  leftIcon?: string;
  isPassword?: boolean;
  isPasswordShown?: boolean;
  togglePasswordVisibility?: () => void;
}

export const Input = forwardRef(
  (
    {
      id,
      title,
      placeholder,
      error,
      leftIcon,
      isPassword,
      isPasswordShown,
      togglePasswordVisibility,
      ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div className="relative">
      <label className="text-techieGray text-xs">{title}</label>
      <div
        className={twMerge(
          "flex items-center border-b bg-white",
          error ? "border-b-complementaryRed-600" : "border-b-black"
        )}
      >
        <div className="p-2">
          <span className="icon-left text-white">
            <img src={leftIcon} alt={id} />
          </span>
        </div>
        {!isPassword ? (
          <input
            id={id}
            ref={ref}
            className="h-12 text-sm font-manrope bg-white border-none outline-none p-2 flex-grow text-techieGray-900"
            type="text"
            placeholder={placeholder}
            {...rest}
          />
        ) : (
          <>
            <input
              id={id}
              ref={ref}
              className="h-12 text-sm  font-manrope bg-white border-none outline-none p-2 flex-grow text-techieGray-900"
              type={isPasswordShown ? "text" : "password"}
              placeholder={placeholder}
              {...rest}
            />
            <div className="p-2">
              <button type="button" onClick={togglePasswordVisibility}>
                {isPasswordShown ? (
                  <EyeIcon className="h-5 w-5" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </>
        )}
      </div>
      {error && (
        <span className="text-xs text-complementaryRed-700">{error}</span>
      )}
    </div>
  )
);
