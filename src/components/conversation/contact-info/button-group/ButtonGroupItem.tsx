import React from "react";

type ButtonGroupItemProps = React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const ButtonGroupItem = React.forwardRef<
    HTMLButtonElement,
    ButtonGroupItemProps
>(function ({ children, ...props }: ButtonGroupItemProps, ref) {
    return (
        <button
            type="button"
            ref={ref}
            className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-950 hover:text-neutral-900 dark:hover:text-neutral-100 flex-shrink-0"
            {...props}
        >
            {children}
        </button>
    );
});

export default ButtonGroupItem;
