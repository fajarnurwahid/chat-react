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
                "w-10 h-10 rounded-full hidden md:flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
});

export default ButtonGroupItem;
