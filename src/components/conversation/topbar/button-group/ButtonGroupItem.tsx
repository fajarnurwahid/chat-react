import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonGroupItemProps = React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const ButtonGroupItem = React.forwardRef<
    HTMLButtonElement,
    ButtonGroupItemProps
>(function ({ children, className, ...props }: ButtonGroupItemProps, ref) {
    return (
        <button
            type="button"
            ref={ref}
            className={twMerge(
                "w-10 h-10 rounded-full hidden md:flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-neutral-100",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
});

export default ButtonGroupItem;
