import React from "react";
import { Link, LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type MenuItemProps = LinkProps & {
    children: React.ReactNode;
    isActive?: boolean;
};

const MenuItem = React.forwardRef<HTMLAnchorElement, MenuItemProps>(
    ({ children, isActive, className, ...props }, ref) => (
        <Link
            ref={ref}
            className={twMerge(
                "w-10 h-10 rounded-lg flex items-center justify-center md:!mx-auto text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 [&.active]:bg-blue-50 [&.active]:text-blue-600 flex-shrink-0",
                className,
                isActive && "active"
            )}
            {...props}
        >
            {children}
        </Link>
    )
);

export default MenuItem;
