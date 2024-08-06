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
            className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-700 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-900 flex-shrink-0"
            {...props}
        >
            {children}
        </button>
    );
});

export default ButtonGroupItem;
