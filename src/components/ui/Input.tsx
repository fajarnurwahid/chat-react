import React from "react";
import { twMerge } from "tailwind-merge";

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(function (
    { className, ...props }: React.InputHTMLAttributes<HTMLInputElement>,
    ref
) {
    return (
        <input
            ref={ref}
            className={twMerge(
                "h-9 rounded-lg bg-neutral-50 dark:bg-neutral-900 outline-none w-full px-4 text-sm border border-neutral-300 dark:border-neutral-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all",
                className
            )}
            {...props}
        />
    );
});

export default Input;
